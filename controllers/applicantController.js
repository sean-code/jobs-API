// Applicant CRUD Operations
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create Applicant
async function createApplicant(req, res) {
    try {
      const { name, email, phoneNumber, resumeLink } = req.body;
      const applicant = await prisma.applicant.create({
        data: {
          name,
          email,
          phoneNumber,
          resumeLink
        }
      });
      res.status(201).json(applicant);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  
  // Get All Applicants
  async function getAllApplicants(req, res) {
    try {
      const applicants = await prisma.applicant.findMany();
      res.status(200).json(applicants);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  
  // Get a Single Applicant
  async function getApplicant(req, res) {
    try {
      const id = req.params.id;
      const applicant = await prisma.applicant.findUnique({
        where: { id }
      });
      if (applicant) {
        res.status(200).json(applicant);
      } else {
        res.status(404).json({ message: 'Applicant not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  
  // Update Applicant
  async function updateApplicant(req, res) {
    try {
      const id = req.params.id;
      const { name, email, phoneNumber, resumeLink } = req.body;
      const applicant = await prisma.applicant.update({
        where: { id },
        data: {
          name,
          email,
          phoneNumber,
          resumeLink
        }
      });
      res.status(200).json(applicant);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  
  // Delete Applicant
  async function deleteApplicant(req, res) {
    try {
      const id = req.params.id;
      await prisma.applicant.delete({
        where: { id }
      });
      res.status(200).json({ message: 'Applicant deleted successfully' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  
  module.exports = {
    createApplicant,
    getAllApplicants,
    getApplicant,
    updateApplicant,
    deleteApplicant
  };
  