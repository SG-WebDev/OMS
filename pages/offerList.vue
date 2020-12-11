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
export default {
  name: "offerList",
  components: {Offer},
  data() {
    return {
      offers: []
    }
  },
  methods: {
    fetchData() {
      fetch('/api/offers')
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
<style scoped>

</style>
