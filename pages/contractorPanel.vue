<template>
  <main v-if="showPanel" class="content">
    <Navbar user-type="contractor"/>
    <section class="section">
      <div class="titlePanel">
        <h1 class="title">Witamy w panelu wykonawcy!</h1>
      </div>
    </section>
  </main>
  <div v-else class="form">
    <div class="formItem">
      <label class="label" for="login">Email:</label>
      <input v-model="email" class="input" id="login" type="email" placeholder="Wpisz e-mail">
    </div>
    <div class="formItem">
      <label class="label" for="password">Hasło:</label>
      <input v-model="password" class="input" id="password" type="password" placeholder="Wpisz hasło">
    </div>
    <div class="formItem formItem--submit">
      <button class="button button--alt" @click="login()">Zaloguj</button>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import OfferList from "@/pages/offerList";
export default {
  name: "contractorPanel",
  components: {OfferList, Navbar},
  data() {
    return {
      showPanel: false,
      email: null,
      password: null,
    }
  },
  methods: {
    login() {
      if(this.email && this.password) {
        fetch('/api/contractor/login', {
          email: this.email,
          password: this.password
        })
          .then(res => res.json())
          .then(data => {
            const contractorID = data.recordset[0].contractorID;
            localStorage.setItem("clientID" , contractorID);
            localStorage.setItem("userType", "contractor");
            localStorage.setItem("logged", "true");
            this.showPanel = true;
          })
      }
      else {
        alert("Wypełnij dane");
      }
    }
  },
  mounted() {
    let logged = localStorage.getItem("logged");
    if(logged === "true") {
      this.showPanel = true;
    }
    else {
      this.showPanel = false;
    }
  }
}
</script>

