const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Importuj CORS
const authRoutes = require('./routes/auth'); // Import routes
const courseRoutes = require('./routes/courses'); // Import kursów

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: 'http://localhost:8080' })); // Konfiguracja CORS, aby zezwolić na dostęp z localhost:8080
app.use(express.json()); // Parse JSON body
app.use('/api/courses', courseRoutes); // Endpoint do zarządzania kursami

// Prosty route testowy
app.get('/', (req, res) => {
  res.send('API działa!');
});

// Routes
app.use('/api/auth', authRoutes); // Rejestracja i logowanie

// Uruchom serwer
app.listen(PORT, () => {
  console.log(`Serwer działa na porcie ${PORT}`);
});

// Połączenie z MongoDB
//mongoose.connect('mongodb+srv://kacpertrz:Lcnbz2mK%21@kursy.xglfr.mongodb.net/kursy?retryWrites=true&w=majority')
//  .then(() => console.log('Połączono z MongoDB'))
//  .catch(err => console.error('Błąd połączenia z MongoDB', err));

const mongoURL = process.env.MONGO_URL || 'mongodb://localhost:27017/kursy';

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Połączono z MongoDB'))
  .catch(err => console.error('Błąd połączenia z MongoDB', err));