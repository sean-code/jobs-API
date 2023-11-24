const express = require('express');
const router = express.Router();
const applicantController = require('../controllers/applicantController');

// Routes for Applicants
router.post('/applicants', applicantController.createApplicant);
router.get('/applicants', applicantController.getAllApplicants);
router.get('/applicants/:id', applicantController.getApplicant);
router.put('/applicants/:id', applicantController.updateApplicant);
router.delete('/applicants/:id', applicantController.deleteApplicant);

module.exports = router;
