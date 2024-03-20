const mongoose = require('mongoose'); // for database connection

// Define job schema
const jobSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  jobTitle: { type: String, required: true },
  company: { type: String, required: true },
  salary: { type: Number, required: true },
  location: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Define job model
const Job = mongoose.model('Job', jobSchema);
// Export job model
module.exports = Job;
