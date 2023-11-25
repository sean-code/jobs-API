const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationController');
const authenticateToken = require('../middleware/authenticateToken');

// Routes for Applications
router.post('/applications', authenticateToken, applicationController.createApplication);
router.get('/applications', authenticateToken, applicationController.getAllApplications);
router.get('/applications/:id', authenticateToken, applicationController.getApplication);
router.get('/applications-by-jobId/:id', authenticateToken, applicationController.getApplicationsByJobId);
router.get('/applications-by-applicantId/:id', applicationController.getApplicationsByApplicantId);
router.put('/applications/:id', authenticateToken, applicationController.updateApplication);
router.delete('/applications/:id', authenticateToken, applicationController.deleteApplication);

module.exports = router;
