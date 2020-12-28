<template>
  <main class="content">
    <Navbar :user-type="userType"/>
    <section class="section">
      <div class="rating" v-for="rating in ratings" :key="rating.ratingID">
        <div class="rating__Content">
          <div class="rating__Title">Treść opinii:</div>
          <div class="rating__Text">
            {{rating.description}}
          </div>
        </div>
        <div class="rating__Author">
          <div class="rating__AuthorText">Autor opinii:</div>
          <div class="rating__AuthorName">{{rating.Client_firstname}} {{rating.Client_lastname}}</div>
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
  computed: {
    getContractorID() {
      return this.$route.query.id;
    },
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
      let contractorID;
      if (this.userType === "contractor") {
        contractorID = sessionStorage.getItem("contractorID")
      }
      else {
        contractorID =  this.getContractorID
      }
      const data = {
        contractorID: contractorID
      }

      fetch('/api/rating/list', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          this.ratings = data.success.recordset;
        })
    },
  },
  mounted() {
    this.fetchData();
  }

}
</script>
