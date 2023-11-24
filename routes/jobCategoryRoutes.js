const express = require('express');
const router = express.Router();
const jobCategoryController = require('../controllers/jobCategoryController');

router.post('/job-category', jobCategoryController.createJobCategory);
router.get('/job-categories', jobCategoryController.getAllJobCategories);
router.get('/job-category/:id', jobCategoryController.getJobCategory);
router.put('/job-category/:id', jobCategoryController.updateJobCategory);
router.delete('/job-category/:id', jobCategoryController.deleteJobCategory);

module.exports = router;
