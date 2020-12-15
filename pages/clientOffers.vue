<template>
  <main class="content">
    <Navbar userType="client"/>
    <section class="section">
      <Offer v-for="offer in offers" :key="offer.offerID" :title="offer.title" :description="offer.description" :price="offer.price"/>
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
      const clientID = localStorage.getItem("clientID");
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
          this.offers = data.recordset;
        })
    },
  },
  mounted() {
    this.fetchData();
  }

}
</script>
