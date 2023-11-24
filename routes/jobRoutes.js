const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');

router.post('/create-jobs', jobController.createJob);
router.get('/all-jobs', jobController.getAllJobs);
router.get('/job/:id', jobController.getJobById);
router.put('/jobs/:id', jobController.updateJob);
router.delete('/jobs/:id', jobController.deleteJob);

module.exports = router;
