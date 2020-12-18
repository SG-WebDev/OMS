<template>
  <Nuxt />
</template>

<style>

:root {
  --mainColor: #4D6179;
  --mainHoverColor: #607793;
  --blackColor: #222222;
  --errorColor: #d64541;
}

html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 18px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.content {
  display: flex;
  min-height: 100vh;
}
.buttonPanel {
  margin: 25px;
}

.button {
  display: inline-block;
  border-radius: 4px;
  padding: 10px 30px;
  margin: 15px;
  transition: all 0.15s ease-in-out;
  cursor: pointer;
  font-size: 20px;
}

.button--main {
  border: 2px solid var(--mainColor);
  background-color: #ffffff;
  color: var(--mainColor);
  text-decoration: none;
}

.button--main:hover, .button--main:focus {
  background-color: var(--mainColor);
  color: #ffffff;
}

.button--alt {
  border: 2px solid var(--mainColor);
  background-color: var(--mainColor);
  color: #ffffff;
  text-decoration: none;
}

.button--alt:hover, .button--alt:focus {
  background-color: #ffffff;
  color: var(--mainColor);
}

.button--action {
  border: 2px solid var(--mainColor);
  background-color: var(--mainColor);
  color: #ffffff;
  text-decoration: none;
  padding: 8px 16px;
  margin: 10px;
  font-size: 16px;
  width: 100%;
  text-align: center;
}

.button--action:hover, .button--action:focus {
  background-color: #ffffff;
  color: var(--mainColor);
}

.button--error {
  border: 2px solid var(--errorColor);
  background-color: var(--errorColor);
  color: #ffffff;
  text-decoration: none;
  padding: 8px 16px;
  margin: 10px;
  font-size: 16px;
  width: 100%;
  text-align: center;
}

.button--error:hover, .button--error:focus {
  background-color: #ffffff;
  color: var(--errorColor);
}

.titlePanel {
  margin: 50px 25px;
  align-self: center;
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
  font-weight: 200;
  font-size: 100px;
  color: var(--mainColor);
  letter-spacing: 1px;
  line-height: 1;
  text-align: center;
}

.subtitle {
  text-align: center;
  font-size: 64px;
  font-weight: 400;
  line-height: 1;
  color: var(--blackColor);
}

.form {
  margin: 25px auto;
  width: min(500px, 80%);
  display: flex;
  flex-direction: column;
}

.formItem {
  display: flex;
  flex-direction: column;
  margin: 16px 0;
}

.formItem--submit {
  align-self: center;
}

.label {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 6px;
}

.input {
  font-size: 16px;
  border-radius: 4px;
  padding: 12px;
  outline: none;
  border: 2px solid var(--blackColor);
}
.input--textarea {
  min-height: 200px;
}

.input:focus {
  border-color: var(--mainColor);
}

.nav {
  background-color: var(--mainColor);
  padding: 25px 15px;
  flex-basis: 250px;
}

.nav__List {
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.nav__Item {
  list-style: none;
  cursor: pointer;
  border-bottom: 1px solid #ffffff;
}

.nav__Item:last-child {
  border-color: transparent;
}

.nav__ItemLink {
  text-decoration: none;
  color: #ffffff;
  padding: 20px 10px;
  display: block;
}

.nav__ItemLink--active {
  background-color: var(--mainHoverColor);
}

.nav__ItemLink:hover , .nav__ItemLink:focus {
  color: var(--blackColor);
  outline: 0;
}

.section {
  padding: 50px;
  flex-grow: 1;
  max-height: 100vh;
  max-width: calc(100vw - 250px);
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #aaaaaa transparent;
}
.section::-webkit-scrollbar {
  width: 6px;
}
.section::-webkit-scrollbar-track {
  background-color: transparent;
}
.section::-webkit-scrollbar-thumb {
  background-color: #aaaaaa;
}

.offer {
  margin: 15px;
  padding: 25px 15px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--mainHoverColor);
}

.offer__Content {
  flex-grow: 1;
  width: 80%;
}

.offer__Actions {
  width: 20%;
  padding-left: 25px;
  margin: 0 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 0;
  border-left: 2px solid var(--mainHoverColor);
}

.offer__Title {
  font-size: 24px;
  font-weight: bold;
  color: var(--blackColor);
  margin: 8px 0;
}

.offer__Desc {
  font-size: 16px;
  margin: 8px 0;
}

.offer__Price {
  font-size: 28px;
  font-weight: bold;
  color: var(--mainColor);
  margin: 8px 0;
}

.error {
  font-size: 20px;
  color: var(--errorColor);
}

</style>
