<template>
  <main v-if="showPanel" class="content">
    <Navbar user-type="contractor"/>
    <section class="section">
      <div class="titlePanel">
        <h1 class="title">Witamy w panelu wykonawcy!</h1>
      </div>
    </section>
  </main>
  <div v-else class="form">
    <div class="formItem">
      <label class="label" for="login">Email:</label>
      <input v-model="email" class="input" id="login" type="email" placeholder="Wpisz e-mail">
    </div>
    <div class="formItem">
      <label class="label" for="password">Hasło:</label>
      <input v-model="password" class="input" id="password" type="password" placeholder="Wpisz hasło">
    </div>
    <div class="formItem formItem--submit">
      <button class="button button--alt" @click="login()">Zaloguj</button>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import OfferList from "@/pages/offerList";
export default {
  name: "contractorPanel",
  components: {OfferList, Navbar},
  data() {
    return {
      showPanel: false,
      email: null,
      password: null,
    }
  },
  methods: {
    login() {
      if(this.email && this.password) {
        const data = {
          email: this.email,
          password: this.password
        }
        fetch('/api/contractor/login', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then(res => res.json())
          .then(data => {
            if(data.success.recordset[0]) {
              console.log(data)
              const contractorID = data.success.recordset[0].contractorID;
              const firstname = data.success.recordset[0].firstname;
              const lastname = data.success.recordset[0].lastname
              sessionStorage.setItem("contractorID" , contractorID);
              sessionStorage.setItem("firstname" , firstname);
              sessionStorage.setItem("lastname" , lastname);
              sessionStorage.setItem("userType", "contractor");
              sessionStorage.setItem("logged", "true");
              this.showPanel = true;
            }
            else {
              alert("Wpisz poprawne dane!");
            }
          })
      }
      else {
        alert("Wypełnij dane");
      }
    }
  },
  mounted() {
    let logged = sessionStorage.getItem("logged");
    if(logged === "true") {
      this.showPanel = true;
    }
    else {
      this.showPanel = false;
    }
  }
}
</script>

