<template>
  <main class="content">
    <Navbar :user-type="userType"/>
    <section class="section">
      <Offer v-for="offer in offers" :key="offer.offerID" :title="offer.title" :description="offer.description" :price="offer.price"/>
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
      offers: []
    }
  },
  computed: {
    userType() {
      if(localStorage) {
        return localStorage.getItem("userType");
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
  },
  mounted() {
    this.fetchData();
  }

}
</script>
