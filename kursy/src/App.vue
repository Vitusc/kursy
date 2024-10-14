<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/dashboard">Dashboard</router-link> |
      <router-link to="/courses">Courses</router-link> |
      <router-link to="/login">Login</router-link>
    </nav>
    <router-view @route-change="onRouteChange"></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    onRouteChange() {
      console.log('Route has changed');
    }
  }
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
