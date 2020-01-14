<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App" name="Ing. William Calle Quintero"/>
    <Header></Header>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue';
export default {
  name: 'app',
  components: {
    HelloWorld,
    Header
  },

  methods: {
    
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
