<template>
  <div v-if="showPanel" class="content">
    content
  </div>
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
      <button class="button button--alt">Zaloguj</button>
    </div>
  </div>
</template>

<script>
export default {
name: "clientPanel",
  data() {
    return {
      showPanel: false
    }
  },
  methods: {

  }
}
</script>
