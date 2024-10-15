const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

const router = express.Router();

// Rejestracja użytkownika
router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  // Sprawdź, czy email i hasło zostały przesłane
  if (!email || !password) {
    return res.status(400).json({ msg: 'Proszę podać email i hasło' });
  }

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'Użytkownik już istnieje' });
    }

    // Tworzymy użytkownika, hasło zostanie zaszyfrowane w modelu User.js
    user = new User({
      email,
      password // Hasło zostanie zaszyfrowane przez middleware w modelu
    });

    await user.save(); // Zapis użytkownika
    res.status(201).json({ msg: 'Użytkownik zarejestrowany' });
  } catch (err) {
    console.error('Błąd podczas rejestracji:', err);
    res.status(500).json({ msg: 'Błąd serwera' });
  }
});

// Logowanie użytkownika
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Sprawdź, czy email i hasło zostały przesłane
  if (!email || !password) {
    return res.status(400).json({ msg: 'Proszę podać email i hasło' });
  }

  try {
    // Sprawdź, czy użytkownik istnieje
    const user = await User.findOne({ email });
    if (!user) {
      console.error('Nie znaleziono użytkownika');
      return res.status(400).json({ msg: 'Niepoprawne dane logowania' });
    }

    console.log('Wprowadzone hasło:', password); // Logowanie wprowadzonego hasła
    console.log('Zaszyfrowane hasło w bazie:', user.password); // Logowanie hasła z bazy

    // Sprawdź poprawność hasła
    const isMatch = await bcrypt.compare(password, user.password);
    console.log('Wynik porównania hasła:', isMatch); // Loguj wynik porównania haseł

    if (!isMatch) {
      console.error('Hasło nie pasuje');
      return res.status(400).json({ msg: 'Niepoprawne dane logowania' });
    }

    res.status(200).json({ msg: 'Zalogowano pomyślnie' });
  } catch (err) {
    console.error('Błąd serwera przy logowaniu:', err);
    res.status(500).json({ msg: 'Błąd serwera' });
  }
});

module.exports = router;
