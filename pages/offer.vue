<template>
  <div class="offer__Content">
    <div class="offer__Title">{{title}}</div>
    <div class="offer__Desc">{{description}}</div>
    <div class="offer__Price">{{price}} zł</div>
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
