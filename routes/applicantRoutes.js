const express = require('express');
const router = express.Router();
const applicantController = require('../controllers/applicantController');
const authenticateToken = require('../middleware/authenticateToken');


// Routes for Applicants
router.post('/applicants', authenticateToken, applicantController.createApplicant);
router.get('/applicants', authenticateToken, applicantController.getAllApplicants);
router.get('/applicants/:id',authenticateToken, applicantController.getApplicant);
router.put('/applicants/:id', authenticateToken, applicantController.updateApplicant);
router.delete('/applicants/:id', authenticateToken, applicantController.deleteApplicant);

module.exports = router;
