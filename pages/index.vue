<template>
  <div class="container">
    <div class="titlePanel">
      <h1 class="title">OMS</h1>
      <h2 class="subtitle">Orders Management System</h2>
    </div>
    <div class="buttonPanel">
      <NuxtLink class="button button--main" to="/clientPanel">Panel Klienta</NuxtLink>
      <NuxtLink class="button button--main" to="/contractorPanel">Panel Wykonawcy</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: null
    }
  },
  methods: {
    openContractorPanel() {
    },
    openClientPanel() {
    }
  },

}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
