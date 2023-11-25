const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationController');

// Routes for Applications
router.post('/applications', applicationController.createApplication);
router.get('/applications', applicationController.getAllApplications);
router.get('/applications/:id', applicationController.getApplication);
router.get('/applications-by-jobId/:id', applicationController.getApplicationsByJobId);
router.get('/applications-by-applicantId/:id', applicationController.getApplicationsByApplicantId);
router.put('/applications/:id', applicationController.updateApplication);
router.delete('/applications/:id', applicationController.deleteApplication);

module.exports = router;
