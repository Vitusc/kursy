const express = require('express');
const Course = require('../models/Course'); // Model kursu
const router = express.Router();

// GET: Pobierz wszystkie kursy
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ msg: 'Błąd serwera' });
  }
});

// POST: Dodaj nowy kurs
router.post('/', async (req, res) => {
  const { title, description, image } = req.body;

  try {
    const newCourse = new Course({
      title,
      description,
      image,
    });

    await newCourse.save();
    res.status(201).json({ msg: 'Kurs dodany', course: newCourse });
  } catch (err) {
    res.status(500).json({ msg: 'Błąd przy dodawaniu kursu' });
  }
});

// PUT: Edytuj kurs
router.put('/:id', async (req, res) => {
  const { title, description, image } = req.body;

  try {
    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.id,
      { title, description, image },
      { new: true }
    );
    res.json({ msg: 'Kurs zaktualizowany', course: updatedCourse });
  } catch (err) {
    res.status(500).json({ msg: 'Błąd przy edycji kursu' });
  }
});

// DELETE: Usuń kurs
router.delete('/:id', async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Kurs usunięty' });
  } catch (err) {
    res.status(500).json({ msg: 'Błąd przy usuwaniu kursu' });
  }
});

module.exports = router;
