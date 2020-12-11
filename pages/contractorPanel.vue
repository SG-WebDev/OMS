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
      <label class="label" for="login">Login:</label>
      <input class="input" id="login" type="text" placeholder="Wpisz login">
    </div>
    <div class="formItem">
      <label class="label" for="password">Hasło:</label>
      <input class="input" id="password" type="password" placeholder="Wpisz hasło">
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
      showPanel: false
    }
  },
  methods: {
    login() {
      localStorage.setItem("logged", "true");
      this.showPanel = true;
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

