<template>
  <Nuxt />
</template>

<style>

:root {
  --mainColor: #4D6179;
  --mainHoverColor: #607793;
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

.titlePanel {
  margin: 50px 25px;
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
  color: #222222;
  letter-spacing: 1px;
  line-height: 1;
}

.subtitle {
  font-size: 64px;
  font-weight: 400;
  line-height: 1;
  color: #222222;
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
  border: 2px solid #222222;
}

.input:focus {
  border-color: var(--mainColor);
}

</style>
