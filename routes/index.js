const express = require('express');

const { indexView, aboutView, projectsView, contactView } = require('../controllers/indexController');

const router = express.Router();

router.get('/', indexView);  
router.get('/about', aboutView);
router.get('/projects', projectsView);
router.get('/contact', contactView);

module.exports = router;
