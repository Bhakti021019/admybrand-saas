const mongoose = require('mongoose');

const FeatureSchema = new mongoose.Schema({
  icon: String,
  title: String,
  description: String,
});

module.exports = mongoose.model('Feature', FeatureSchema);
