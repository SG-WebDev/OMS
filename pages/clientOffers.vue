<template>
  <main class="content">
    <Navbar userType="client"/>
    <section class="section">
      <div class="offer" v-for="offer in offers" :key="offer.offerID">
        <Offer :title="offer.title" :description="offer.description" :price="offer.price"/>
        <div class="offer__Actions">
          <NuxtLink class="button button--action" to="/">Wykonawcy</NuxtLink>
          <NuxtLink class="button button--action" :to="{ path: '/editOffer', query: { id: offer.offerID }}">Edytuj</NuxtLink>
          <NuxtLink class="button button--action button--error" to="/">Usuń</NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import Offer from "@/pages/offer";
import Navbar from "@/components/Navbar";
export default {
  name: "clientOffers",
  components: {Navbar, Offer},
  data() {
    return {
      offers: []
    }
  },
  methods: {
    fetchData() {
      const clientID = sessionStorage.getItem("clientID");
      const data = {
        clientID: clientID
      }
      fetch('/api/client/offers', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => {
          this.offers = data.success.recordset;
        })
    },
  },
  mounted() {
    this.fetchData();
  }

}
</script>
