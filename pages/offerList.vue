<template>
  <main class="content">
    <Navbar :user-type="userType"/>
    <section class="section">
      <div class="offer" v-for="offer in offers" :key="offer.offerID">
        <Offer :title="offer.title" :description="offer.description" :price="offer.price"/>
        <div v-if="userType === 'contractor'" class="offer__Actions">
          <NuxtLink class="button button--action" to="/">Zgłoś chęć wykonania</NuxtLink>
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
