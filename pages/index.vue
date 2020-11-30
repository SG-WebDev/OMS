<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        OMS
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
    <div>
      <button class="button" @click="runTest">RUN</button>
      {{records ? records : "No Data" }}
    </div>
  </div>
</template>

<script>
export default {
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

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
