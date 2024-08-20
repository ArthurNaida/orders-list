<template>
  <div id="app">
    <!-- <div class="bg-wrapper"></div> -->
    <router-view/>
  </div>
</template>

<script>
// import TLogin from './components/views/TLogin.vue'
export default {
  name: 'App',
  components: {
    // TLogin
  }
}
</script>

<style>
* {
  color: #333333;
}
body {
  margin: 0;
}
textarea,
input[type="text"], input[type="text"]:focus-visible,
input[type="password"], input[type="password"]:focus-visible,
input[type="search"], input[type="search"]:focus-visible {
    border: 0;
    outline: none;
    width: inherit;
}
button {
  cursor: pointer;
  border: 0;
  background: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
textarea {
  resize: none;
}
.pop-up {
  position: fixed;
  display: block;
  width: fit-content;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
}
</style>
