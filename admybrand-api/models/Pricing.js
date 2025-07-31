const mongoose = require('mongoose');

const PricingSchema = new mongoose.Schema({
  tier: String,
  price: Number,
  features: [String],
  mostPopular: { type: Boolean, default: false },
});

module.exports = mongoose.model('Pricing', PricingSchema);
