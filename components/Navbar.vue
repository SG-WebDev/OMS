<template>
  <nav class="nav">
    <ul class="nav__List">
      <li class="nav__Item">
        <NuxtLink :to="panelURL">Twój panel</NuxtLink>
      </li>
      <li class="nav__Item">
        <NuxtLink :to="profileURL">Twój profil</NuxtLink>
      </li>
      <li class="nav__Item">
        <NuxtLink to="/offerList">Oferty w serwisie</NuxtLink>
      </li>
      <li v-if="userType === 'client'" class="nav__Item">
        <NuxtLink to="/addOffer">Utwórz oferte</NuxtLink>
      </li>
      <li v-if="userType === 'client'" class="nav__Item">
        <NuxtLink to="">Wystawione oferty</NuxtLink>
      </li>
      <li v-if="userType === 'contractor'" class="nav__Item">
        <NuxtLink to="">Podjęte oferty</NuxtLink>
      </li>
      <li class="nav__Item" @click="logout()">
        <a>Wyloguj</a>
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
      this.$router.push({ name: "index" });
    }
  }
}
</script>

<style scoped>

</style>
