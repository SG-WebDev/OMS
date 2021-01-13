<template>
  <main class="content">
    <Navbar :user-type="userType"/>
    <section class="section">
      <div v-if="error" class="error">
        Komunikat błędu: {{error}}
      </div>
      <div class="offer" v-for="offer in offers" :key="offer.offerID">
        <Offer :title="offer.title" :description="offer.description" :price="offer.price"/>
        <div v-if="userType === 'contractor'" class="offer__Actions">
          <button class="button button--action" @click="propose(offer.offerID)">Zgłoś chęć wykonania</button>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import Offer from "@/pages/offer";
import Navbar from "@/components/Navbar";
export default {
  name: "offerList",
  components: { Navbar, Offer},
  data() {
    return {
      offers: [],
      error: null,
    }
  },
  computed: {
    userType() {
      if(sessionStorage) {
        return sessionStorage.getItem("userType");
      }
      else {
        alert("Nie można pobrać danych o sesji")
      }
    }
  },
  methods: {
    fetchData() {
      fetch('/api/offers/list')
        .then(res => res.json())
        .then(data => {
          this.offers = data.success.recordset;
        })
    },
    propose(offerID) {
      const data = {
        offerID: offerID,
        contractorID: sessionStorage.getItem("contractorID")
      }
      fetch('/api/offers/proposals/add', {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => {
          if(data.success) {
            console.log(data);
            alert("Zgłosiłeś chęć wykonania zlecenia!");
          }
          else {
            console.log(data);
            this.error = data.error.originalError.info.message;
          }
        })
    },
  },
  mounted() {
    this.fetchData();
  }

}
</script>
