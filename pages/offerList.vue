<template>

</template>
<script>
export default {
  name: "offerList",
  data() {
    return {
      records: null
    }
  },
  methods: {
    fetchData() {
      fetch('/api/clients')
        .then(res => res.json())
        .then(data => {
          console.log(data.recordset);
          this.records = data.recordset;
        })
    },
    runTest() {
      this.fetchData();
    }
  },

}
</script>
<style scoped>

</style>
