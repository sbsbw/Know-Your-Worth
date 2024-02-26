const mongoose = require('mongoose');

const averageSchema = new mongoose.Schema({
  location: { type: String, required: true, unique: true },
  averageSalary: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Average = mongoose.model('Average', averageSchema);

module.exports = Average;
