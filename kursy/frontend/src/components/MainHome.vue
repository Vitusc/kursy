<template>
  <div class="home">
    <header class="header">
      <h1>Kursy Online</h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Kursy</a></li>
          <li><a href="#">Kontakt</a></li>
        </ul>
      </nav>
    </header>

    <section class="hero">
      <h2>Rozwijaj swoje umiejętności z najlepszymi kursami</h2>
      <p>Ucz się z najlepszymi ekspertami w branży i zdobywaj nowe kwalifikacje</p>
      <a href="#" class="cta-button">Zobacz kursy</a>
    </section>

    <section class="featured-courses">
      <h3>Wyróżnione kursy</h3>
      <div class="courses-grid">
        <div class="course-card" v-for="course in courses" :key="course.id">
          <h4>{{ course.title }}</h4>
          <p>{{ course.description }}</p>
          <p><strong>Cena: {{ course.price }} zł</strong></p>
          <a href="#" class="cta-button">Zapisz się</a>
        </div>
      </div>
    </section>

    <footer>
      <p>&copy; 2024 Kursy Online. Wszelkie prawa zastrzeżone.</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      courses: [
        { id: 1, title: 'Kurs Node.js', description: 'Tworzenie aplikacji w Node.js', price: 299.99 },
        { id: 2, title: 'Kurs Vue.js', description: 'Tworzenie aplikacji SPA z Vue.js', price: 199.99 },
        { id: 3, title: 'Kurs Express.js', description: 'Tworzenie backendu z Express.js', price: 249.99 },
      ]
    };
  }
};
</script>

<style scoped>
.hero {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('../assets/main.png') no-repeat center center; /* Zamień na ścieżkę do obrazu */
  background-size: cover;
}

.content {
  text-align: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.5); /* Półprzezroczysty czarny panel */
  padding: 20px;
  border-radius: 10px;
}

h1 {
  font-size: 48px;
  margin-bottom: 20px;
}

p {
  font-size: 24px;
  margin-bottom: 30px;
}

.cta-button {
  background-color: #3498db;
  color: white;
  padding: 15px 30px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #2980b9;
}
</style>