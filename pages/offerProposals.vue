<template>
  <main class="content">
    <Navbar user-type="client"/>
    <section class="section">
      <span v-if="this.contractors.length === 0">Brak chętnych do podjęcia zlecenia</span>
      <div class="proposal" v-for="contractor in contractors">
        <div class="proposal__Info">
          {{contractor.firstname}} {{contractor.lastname}}
        </div>
        <div class="proposal__Actions">
          <NuxtLink class="button button--action" :to="{ path: '/contractorProfile', query: { id: contractor.contractorID }}">Sprawdź profil</NuxtLink>
          <button class="button button--action" @click="acceptContractor(contractor.contractorID)">Zaakceptuj wykonawce</button>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "offerProposals",
  data() {
    return {
      contractors: [],
    }
  },
  computed: {
    getOfferID() {
      return this.$route.query.id;
    },
  },
  methods: {
    acceptContractor(contractorID) {
      const data = {
        offerID: this.getOfferID,
        contractorID: contractorID
      }
      fetch('/api/offers/proposals/accept', {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          alert("Zaakceptowałeś wykonawce do zlecenia!");
        })
    }
  },
  mounted() {
    const data = {
      offerID: this.getOfferID,
    }
    fetch('/api/offers/proposals', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.contractors = data.success.recordset;
      })
  }
}
</script>

