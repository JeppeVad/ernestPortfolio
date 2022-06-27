const express = require('express');

const { indexView, projectsView, contactView, publicationsView, aboutView } = require('../controllers/indexController');

const router = express.Router();

router.get('/', indexView);  
router.get('/projects', projectsView);
router.get('/contact', contactView);
router.get('/publications', publicationsView);
router.get('/about', aboutView);


module.exports = router;
