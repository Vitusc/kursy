<template>
  <div>
    <h1>Wszystkie Kursy</h1>
    <ul>
      <li v-for="course in courses" :key="course.id">
        {{ course.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MainHome',
  data() {
    return {
      courses: [
        { id: 1, title: 'Kurs Vue.js' },
        { id: 2, title: 'Kurs Node.js' },
        { id: 3, title: 'Kurs MongoDB' }
      ],
    };
  },
};
</script>
