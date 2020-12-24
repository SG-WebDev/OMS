<template>
  <nav class="nav">
    <div class="username">
      Witaj, {{getUsername}}
    </div>
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
    },
    getUsername() {
      let firstname = sessionStorage.getItem("firstname");
      let lastname = sessionStorage.getItem("lastname");
      return `${firstname} ${lastname}`;
    }
  },
  methods: {
    logout() {
      sessionStorage.clear();
      this.$router.push({ name: "index" });
    }
  }
}
</script>

<style scoped>
.username {
  color: #ffffff;
  margin: 15px 10px 25px 10px;
  font-weight: bold;
  font-size: 22px;
}
</style>
