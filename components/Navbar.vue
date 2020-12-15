<template>
  <nav class="nav">
    <ul class="nav__List">
      <li class="nav__Item">
        <NuxtLink class="nav__ItemLink" active-class="nav__ItemLink--active" :to="panelURL">Twój panel</NuxtLink>
      </li>
      <li class="nav__Item">
        <NuxtLink class="nav__ItemLink" active-class="nav__ItemLink--active" :to="profileURL">Twój profil</NuxtLink>
      </li>
      <li class="nav__Item">
        <NuxtLink class="nav__ItemLink" active-class="nav__ItemLink--active" to="/offerList">Oferty w serwisie</NuxtLink>
      </li>
      <li v-if="userType === 'client'" class="nav__Item">
        <NuxtLink class="nav__ItemLink" active-class="nav__ItemLink--active" to="/addOffer">Utwórz oferte</NuxtLink>
      </li>
      <li v-if="userType === 'client'" class="nav__Item">
        <NuxtLink class="nav__ItemLink" active-class="nav__ItemLink--active" to="/clientOffers">Wystawione oferty</NuxtLink>
      </li>
      <li v-if="userType === 'contractor'" class="nav__Item">
        <NuxtLink class="nav__ItemLink" active-class="nav__ItemLink--active" to="/contractorOffers">Podjęte oferty</NuxtLink>
      </li>
      <li class="nav__Item" @click="logout()">
        <a class="nav__ItemLink">Wyloguj</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: ['userType'],
  computed: {
    panelURL() {
      return `/${this.userType}Panel`;
    },
    profileURL() {
      return `/${this.userType}Profile`;
    }
  },
  methods: {
    logout() {
      localStorage.setItem("logged", "false");
      localStorage.removeItem("clientID");
      localStorage.removeItem("contractorID");
      localStorage.removeItem("userType");
      this.$router.push({ name: "index" });
    }
  }
}
</script>

<style scoped>

</style>
