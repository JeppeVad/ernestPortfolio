const express = require('express');

const { indexView, projectsView, contactView } = require('../controllers/indexController');

const router = express.Router();

router.get('/', indexView);  
router.get('/projects', projectsView);
router.get('/contact', contactView);

module.exports = router;
