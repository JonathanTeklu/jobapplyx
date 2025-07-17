// Task schema - merge conflicts resolved
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  snagger: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  numberOfApplications: { type: Number, required: true },
  resumeLink: { type: String, required: true },
  jobTypePreference: String,
  locationPreference: String,
  campus: String,
  major: String,
  deadline: Date,
  budget: { type: Number, required: true },
  status: { type: String, enum: ['open', 'claimed', 'completed'], default: 'open' },
  proofLink: String,
  notes: String,
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
