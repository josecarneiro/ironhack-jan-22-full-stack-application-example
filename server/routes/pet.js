'use strict';

const express = require('express');
const router = express.Router();
const Pet = require('./../models/pet');

router.get('/list', (req, res, next) => {
  Pet.find()
    .then((pets) => {
      res.json({ pets });
    })
    .catch((error) => {
      next(error);
    });
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  Pet.findById(id)
    .then((pet) => {
      res.json({ pet });
    })
    .catch((error) => {
      next(error);
    });
});

router.delete('/:id', (req, res, next) => {
  const { id } = req.params;
  Pet.findByIdAndDelete(id)
    .then(() => {
      res.json({});
    })
    .catch((error) => {
      next(error);
    });
});

router.patch('/:id', (req, res, next) => {
  const { id } = req.params;
  const { name, species, picture, position } = req.body;
  Pet.findByIdAndUpdate(id, { name, species, picture, position }, { new: true })
    .then((pet) => {
      res.json({ pet });
    })
    .catch((error) => {
      next(error);
    });
});

router.post('/', (req, res, next) => {
  const { name, species, picture, position } = req.body;
  Pet.create({ name, species, picture, position })
    .then((pet) => {
      res.json({ pet });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
