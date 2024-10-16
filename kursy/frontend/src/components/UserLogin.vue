<template>
  <div>
    <h1>Logowanie</h1>
    <form @submit.prevent="login">
      <label for="email">Email</label>
      <input type="email" v-model="email" required />
      <label for="password">Hasło</label>
      <input type="password" v-model="password" required />
      <button type="submit">Zaloguj się</button>
    </form>

    <p v-if="errorMsg">{{ errorMsg }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      errorMsg: '',
    };
  },
  methods: {
    async login() {
      // Sprawdź, czy pola nie są puste
      if (!this.email || !this.password) {
        this.errorMsg = 'Proszę podać email i hasło';
        return;
      }

      try {
        const res = await axios.post('http://localhost:5000/api/auth/login', {
          email: this.email,
          password: this.password,
        });
        console.log(res.data.msg);
        this.$router.push('/dashboard'); // Przekierowanie po pomyślnym logowaniu
      } catch (error) {
        console.error(error.response?.data?.msg || 'Błąd logowania');
        this.errorMsg = error.response?.data?.msg || 'Błąd logowania';
      }
    },
  },
};
</script>

<style scoped>
/* Stylizacja formularza logowania */
form {
  display: flex;
  flex-direction: column;
  width: 300px;
}

label, input, button {
  margin-bottom: 10px;
}

p {
  color: red;
}
</style>
