const Pricing = require('../models/Pricing');

exports.getPricing = async (req, res) => {
  const plans = await Pricing.find();
  res.json(plans);
};

exports.createPricing = async (req, res) => {
  const plan = new Pricing(req.body);
  await plan.save();
  res.status(201).json(plan);
};

exports.updatePricing = async (req, res) => {
  const updated = await Pricing.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.deletePricing = async (req, res) => {
  await Pricing.findByIdAndDelete(req.params.id);
  res.json({ message: 'Pricing plan deleted' });
};
