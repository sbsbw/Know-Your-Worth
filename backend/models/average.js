const mongoose = require('mongoose');
// Define average schema
const averageSchema = new mongoose.Schema({
  location: { type: String, required: true, unique: true },
  averageSalary: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
// Define average model
const Average = mongoose.model('Average', averageSchema);

// Export average model
module.exports = Average;
