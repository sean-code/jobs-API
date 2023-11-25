// Application CRUD Operations
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create Application
async function createApplication(req, res) {
    try {
      const { jobId, applicantId } = req.body;
      const application = await prisma.application.create({
        data: {
          jobId,
          applicantId
        }
      });
      res.status(201).json(application);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  
  // Get All Applications
  async function getAllApplications(req, res) {
    try {
      const applications = await prisma.application.findMany();
      res.status(200).json(applications);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  
  // Get a Single Application
  async function getApplication(req, res) {
    try {
      const id = req.params.id;
      const application = await prisma.application.findUnique({
        where: { id }
      });
      if (application) {
        res.status(200).json(application);
      } else {
        res.status(404).json({ message: 'Application not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }



  // Get Applications by Job ID
  async function getApplicationsByJobId(req, res) {
    try {
      const jobId = req.params.jobId;
      const applications = await prisma.application.findMany({
        where: { jobId }
      });
      res.status(200).json(applications);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }



  // Get Applications by Applicant ID
    async function getApplicationsByApplicantId(req, res) {
      try {
        const applicantId = req.params.applicantId;
        const applications = await prisma.application.findMany({
          where: { applicantId }
        });
        res.status(200).json(applications);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }



  
  // Update Application
  async function updateApplication(req, res) {
    try {
      const id = req.params.id;
      const { jobId, applicantId } = req.body;
      const application = await prisma.application.update({
        where: { id },
        data: {
          jobId,
          applicantId
        }
      });
      res.status(200).json(application);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  
  // Delete Application
  async function deleteApplication(req, res) {
    try {
      const id = req.params.id;
      await prisma.application.delete({
        where: { id }
      });
      res.status(200).json({ message: 'Application deleted successfully' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  
  module.exports = {
    createApplication,
    getAllApplications,
    getApplication,
    getApplicationsByJobId,
    getApplicationsByApplicantId,
    updateApplication,
    deleteApplication
  };
  