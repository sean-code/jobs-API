const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create JobCategory
async function createJobCategory(req, res) {
  try {
    const { name, description } = req.body;
    const jobCategory = await prisma.jobCategory.create({
      data: {
        name,
        description
      }
    });
    res.status(201).json(jobCategory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Get All JobCategories
async function getAllJobCategories(req, res) {
  try {
    const jobCategories = await prisma.jobCategory.findMany();
    res.status(200).json(jobCategories);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Get a Single JobCategory
async function getJobCategory(req, res) {
  try {
    const id = req.params.id;
    const jobCategory = await prisma.jobCategory.findUnique({
      where: { id }
    });
    if (jobCategory) {
      res.status(200).json(jobCategory);
    } else {
      res.status(404).json({ message: 'JobCategory not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Update JobCategory
async function updateJobCategory(req, res) {
  try {
    const id = req.params.id;
    const { name, description } = req.body;
    const jobCategory = await prisma.jobCategory.update({
      where: { id },
      data: {
        name,
        description
      }
    });
    res.status(200).json(jobCategory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Delete JobCategory
async function deleteJobCategory(req, res) {
  try {
    const id = req.params.id;
    await prisma.jobCategory.delete({
      where: { id }
    });
    res.status(200).json({ message: 'JobCategory deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  createJobCategory,
  getAllJobCategories,
  getJobCategory,
  updateJobCategory,
  deleteJobCategory
};
