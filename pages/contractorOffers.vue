<template>
  <main class="content">
    <Navbar userType="contractor"/>
    <section class="section">
      <Offer v-for="offer in offers" :key="offer.offerID" :title="offer.title" :description="offer.description" :price="offer.price"/>
    </section>
  </main>
</template>
<script>
import Offer from "@/pages/offer";
import Navbar from "@/components/Navbar";
export default {
  name: "contractorOffers",
  components: {Navbar, Offer},
  data() {
    return {
      offers: []
    }
  },
  methods: {
    fetchData() {
      const contractorID = localStorage.getItem("contractorID");
      const data = {
        contractorID: contractorID
      }
      fetch('/api/contractor/offers', {
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
