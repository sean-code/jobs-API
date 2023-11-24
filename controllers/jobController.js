const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

    async function createJob(req, res) {
        try {
            const { title, description, location, jobCategoryId } = req.body;
            const job = await prisma.job.create({
            data: {
                title,
                description,
                location,
                jobCategoryId
            }
            });
            res.status(201).json(job);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }


    //Get All Jobs
    async function getAllJobs(req, res) {
        try {
          const jobs = await prisma.job.findMany();
          res.status(200).json(jobs);
        } catch (error) {
          res.status(400).json({ error: error.message });
        }
    }
    


    //Get Job By ID
    async function getJobById(req, res) {
        try {
          const id = req.params.id;
          const job = await prisma.job.findUnique({
            where: { id }
          });
          if (job) {
            res.status(200).json(job);
          } else {
            res.status(404).json({ message: 'Job not found' });
          }
        } catch (error) {
          res.status(400).json({ error: error.message });
        }
      }

      //Update Job
      async function updateJob(req, res) {
        try {
          const id = req.params.id;
          const { title, description, location, jobCategoryId } = req.body;
          const job = await prisma.job.update({
            where: { id },
            data: {
              title,
              description,
              location,
              jobCategoryId
            }
          });
          res.status(200).json(job);
        } catch (error) {
          res.status(400).json({ error: error.message });
        }
      }


      //Delete Job
      async function deleteJob(req, res) {
        try {
          const id = req.params.id;
          await prisma.job.delete({
            where: { id }
          });
          res.status(200).json({ message: 'Job deleted successfully' });
        } catch (error) {
          res.status(400).json({ error: error.message });
        }
      }
      
// Export the function to use in the route
module.exports = {
  createJob,
  getAllJobs,
  getJobById,
  updateJob,
  deleteJob
};
