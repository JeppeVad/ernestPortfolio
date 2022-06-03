const express = require('express');

const { indexView, getProjects } = require('../controllers/indexController');
const router = express.Router();

router.get('/', indexView);
router.get('/projects', getProjects); 

module.exports = router;