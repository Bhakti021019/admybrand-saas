const Feature = require('../models/Feature');

exports.getFeatures = async (req, res) => {
  const features = await Feature.find();
  res.json(features);
};

exports.createFeature = async (req, res) => {
  const newFeature = new Feature(req.body);
  await newFeature.save();
  res.status(201).json(newFeature);
};

exports.updateFeature = async (req, res) => {
  const updated = await Feature.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.deleteFeature = async (req, res) => {
  await Feature.findByIdAndDelete(req.params.id);
  res.json({ message: 'Feature deleted' });
};
