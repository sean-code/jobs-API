const express = require('express');
const router = express.Router();
const jobCategoryController = require('../controllers/jobCategoryController');
const authenticateToken = require('../middleware/authenticateToken');


router.post('/job-category', authenticateToken, jobCategoryController.createJobCategory);
router.get('/job-categories', authenticateToken, jobCategoryController.getAllJobCategories);
router.get('/job-category/:id', authenticateToken, jobCategoryController.getJobCategory);
router.put('/job-category/:id', authenticateToken, jobCategoryController.updateJobCategory);
router.delete('/job-category/:id', authenticateToken, jobCategoryController.deleteJobCategory);

module.exports = router;
