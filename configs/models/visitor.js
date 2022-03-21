const mongoose = require('mongoose');

const visitorSchema = new mongoose.Schema(
  {
    browser: { type: String },
    visitorId: { type: String, required: true },
    promoterId: { type: String },
  },
  {
    timestamps: true,
  }
);

const Visitor = mongoose.model('Visitor', visitorSchema);

module.exports = Visitor;
