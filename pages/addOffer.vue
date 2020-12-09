<template>
  <div class="form">
    <div class="formItem">
      <label class="label" for="title">Tytuł:</label>
      <input class="input" id="title" type="text" placeholder="Wpisz tytuł">
    </div>
    <div class="formItem">
      <label class="label" for="desc">Opis:</label>
      <textarea class="input" id="desc" placeholder="Wpisz Opis"></textarea>
    </div>
    <div class="formItem">
      <label class="label" for="price">Kwota (PLN):</label>
      <input class="input" id="price" type="number" placeholder="Wpisz kwote">
    </div>
    <div class="formItem formItem--submit">
      <button class="button button--alt">Dodaj ogłoszenie</button>
    </div>
  </div>
</template>

<script>
export default {
name: "addOffer"
}
</script>

<style scoped>

</style>
