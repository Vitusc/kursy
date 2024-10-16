<template>
  <div class="courses-container">
    <h1>Wszystkie Kursy</h1>
    <div class="courses-grid">
      <div class="course-card" v-for="course in courses" :key="course._id">
        <img :src="course.image" alt="Zdjęcie kursu" />
        <h2>{{ course.title }}</h2>
        <button @click="launchCourse(course._id)">Uruchom kurs</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      courses: []
    };
  },
  methods: {
    async fetchCourses() {
      try {
        const response = await axios.get('http://localhost:5000/api/courses');
        this.courses = response.data;
      } catch (error) {
        console.error('Błąd przy pobieraniu kursów:', error);
      }
    },
    launchCourse(courseId) {
      // Przekierowanie do strony szczegółów kursu
      this.$router.push(`/course/${courseId}`);
    }
  },
  created() {
    this.fetchCourses(); // Pobierz kursy po załadowaniu komponentu
  }
};
</script>

<style scoped>
.courses-container {
  text-align: center;
}
.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}
.course-card {
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}
.course-card img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}
.course-card button {
  margin-top: 10px;
  padding: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.course-card button:hover {
  background-color: #38a373;
}
</style>
