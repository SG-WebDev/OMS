<template>
  <main class="content">
    <Navbar :user-type="userType"/>
    <section class="section">
      <div v-if="error" class="error">
        Komunikat błędu: {{error}}
      </div>
      <div class="form">
        <div class="formItem">
          <label class="label" for="title">Tytuł:</label>
          <input v-model="title" class="input" id="title" type="text" placeholder="Wpisz tytuł">
        </div>
        <div class="formItem">
          <label class="label" for="desc">Opis:</label>
          <textarea v-model="desc" class="input input--textarea" id="desc" placeholder="Wpisz Opis"></textarea>
        </div>
        <div class="formItem">
          <label class="label" for="price">Kwota (PLN):</label>
          <input v-model="price" class="input" id="price" type="number" placeholder="Wpisz kwote">
        </div>
        <div class="formItem formItem--submit">
          <button class="button button--alt" @click="editOffer()">Edytuj ogłoszenie</button>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "editOffer",
  data() {
    return {
      title: null,
      desc: null,
      price: null,
      error: null,
      status: null
    }
  },
  computed: {
    userType() {
      if(sessionStorage) {
        return sessionStorage.getItem("userType");
      }
    },
    getOfferID() {
      return this.$route.query.id;
    },
  },
  methods: {
    editOffer() {
      if(this.title && this.desc && this.price) {
        const data = {
          offerID: this.getOfferID,
          title: this.title,
          description: this.desc,
          price: this.price,
          status: this.status
        }
        fetch('/api/offers/edit', {
          method: "PUT",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then(res => res.json())
          .then(data => {
            if(data.success) {
              console.log(data);
              alert("Oferta została zmodyfikowana! Sprawdź w zakładce 'Wystawione oferty'");
            }
            else {
              console.log(data);
              this.error = data.error.originalError.info.message;
            }
          })
      }
      else {
        alert("Wypełnij wymagane dane");
      }
    }
  },
  mounted() {
    const data = {
      offerID: this.getOfferID,
    }
    fetch('/api/offers/view', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        if(data.success) {
          this.title = data.success.recordset[0].title;
          this.desc = data.success.recordset[0].description;
          this.price = data.success.recordset[0].price;
          this.status = data.success.recordset[0].status;
          console.log(data);
        }
        else {
          console.log(data);
          this.error = data.error.originalError.info.message;
        }
      })
  }
}
</script>

