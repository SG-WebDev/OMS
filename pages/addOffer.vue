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
          <button class="button button--alt" @click="addOffer()">Dodaj ogłoszenie</button>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
name: "addOffer",
  data() {
    return {
      title: null,
      desc: null,
      price: null,
      error: null
    }
  },
  computed: {
    userType() {
      if(sessionStorage) {
        return sessionStorage.getItem("userType");
      }
      else {
        alert("Nie można pobrać danych o sesji")
      }
    }
  },
  methods: {
    addOffer() {
      if(this.title && this.desc && this.price) {
        const clientID = sessionStorage.getItem("clientID");
        const data = {
          clientID: clientID,
          title: this.title,
          description: this.desc,
          price: this.price,
        }
        fetch('/api/offers/add', {
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
              alert("Oferta została dodana! Sprawdź w zakładce 'Wystawione oferty'");
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
  }
}
</script>
