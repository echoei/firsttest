<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <!-- <yezi-view/> -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html{
  font-size: 20px;
}
body{
   background-color: bisque;
}
* {
    margin: 0;
    padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
 
}

</style>
