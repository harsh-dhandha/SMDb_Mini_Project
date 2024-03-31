const express = require('express');
const Director = require('../models/director');
const directorController = require('../controllers/directorController');

const router = express.Router();

// Import the Director model

// Define the routes for directors
router.get('/', directorController.getAllDirectors);
router.get('/:id', directorController.getDirectorById);
router.post('/', directorController.createDirector);


router.put('/:id', directorController.updateDirector);

router.delete('/:id', directorController.deleteDirector);
module.exports = router;