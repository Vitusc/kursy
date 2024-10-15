<template>
  <div id="app">
    <nav>
      <router-link to="/">Strona główna</router-link>
      <router-link to="/login">Logowanie</router-link>
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/registration">Rejestracja</router-link>
      <router-link to="/courses">Wszystkie kursy</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Dodajmy trochę podstawowego stylu */
nav {
  margin-bottom: 20px;
}
nav a {
  margin-right: 10px;
}
</style>
