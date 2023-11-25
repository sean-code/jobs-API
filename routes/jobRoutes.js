const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');
const authenticateToken = require('../middleware/authenticateToken');


router.post('/create-jobs', authenticateToken, jobController.createJob);
router.get('/all-jobs', authenticateToken, jobController.getAllJobs);
router.get('/get-job/:id', authenticateToken, jobController.getJobById);
router.put('/jobs/:id', authenticateToken, jobController.updateJob);
router.delete('/jobs/:id', authenticateToken, jobController.deleteJob);

module.exports = router;
