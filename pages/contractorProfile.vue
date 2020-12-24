<template>
  <main class="content">
    <Navbar userType="contractor"/>
    <section class="section">
      <div class="rating" v-for="rating in ratings" :key="rating.ratingID">
        <div class="rating__Content">
          <div class="rating__Title">Treść opinii:</div>
          <div class="rating__Text">
            {{rating.description}}
          </div>
        </div>
        <div class="rating__Author">
          <span class="rating__AuthorText"> Autor opinii:</span>
          <NuxtLink class="rating__AuthorName" to="/index">ID {{rating.clientID}}</NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import Navbar from "@/components/Navbar";
export default {
  name: "contractorProfile",
  components: {Navbar},
  data() {
    return {
      ratings: []
    }
  },
  methods: {
    fetchData() {
      const contractorID = sessionStorage.getItem("contractorID");
      const data = {
        contractorID: contractorID
      }
      fetch('/api/contractor/ratings', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => {
          this.ratings = data.success.recordset;
        })
    },
  },
  mounted() {
    this.fetchData();
  }

}
</script>
