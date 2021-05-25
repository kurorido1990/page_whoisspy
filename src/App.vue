<template>
  <div id="app">
    <img @click="back" src="./assets/logo.gif" style="height:250pt; border-radius:99em; margin-bottom: 10px;">
    <!-- <h3><font color="red">Who Is Spy</font></h3> -->
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    back () {
      // this.$router.push({ name: 'home' })
    }
  }
}

</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
