<template>
  <div class="offer">
    <div class="offer__Content">
      <div class="offer__Title">{{title}}</div>
      <div class="offer__Desc">{{description}}</div>
      <div class="offer__Price">{{price}}</div>
    </div>
    <div class="offer__Actions"></div>
  </div>
</template>

<script>
export default {
  name: "offer",
  props: ["title", "description", "price"],
}
</script>

<style scoped>

</style>
