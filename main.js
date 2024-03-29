const express = require('express');
const jobRoutes = require('./routes/jobRoutes');
const jobCategoryRoutes = require('./routes/jobCategoryRoutes')
const applicationRoutes = require('./routes/applicationRoutes');
const applicantRoutes = require('./routes/applicantRoutes');
const userRoutes = require('./routes/userRoutes');
// other route imports...



const app = express();
app.use(express.json());


app.use('/api', userRoutes);
app.use('/api', jobRoutes);
app.use('/api', jobCategoryRoutes);
app.use('/api', applicationRoutes);
app.use('/api', applicantRoutes);

app.use((req, res, next) => {
    res.status(404).send("Sorry, can't find that!");
  });
  


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
