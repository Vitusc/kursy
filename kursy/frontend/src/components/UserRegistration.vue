<template>
    <div>
      <h1>Rejestracja</h1>
      <form @submit.prevent="register">
        <label for="email">Email</label>
        <input type="email" v-model="email" required />
        <label for="password">Hasło</label>
        <input type="password" v-model="password" required />
        <button type="submit">Zarejestruj się</button>
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
      async register() {
        try {
          const res = await axios.post('http://localhost:5000/api/auth/register', {
            email: this.email,
            password: this.password,
          });
          console.log(res.data.msg);
          this.$router.push('/login'); // Przekierowanie po rejestracji
        } catch (error) {
          console.error(error.response?.data?.msg || 'Błąd rejestracji');
          this.errorMsg = error.response?.data?.msg || 'Błąd rejestracji';
        }
      },
    },
  };
  </script>
  
  <style scoped>
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
  