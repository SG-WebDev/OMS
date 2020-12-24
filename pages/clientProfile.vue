<template>
  <main class="content">
    <Navbar userType="client"/>
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
  name: "clientProfile",
  components: {Navbar},
  data() {
    return {
      ratings: []
    }
  },
  methods: {
    fetchData() {
      const clientID = sessionStorage.getItem("clientID");
      const data = {
        clientID: clientID
      }
      fetch('/api/client/ratings', {
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
