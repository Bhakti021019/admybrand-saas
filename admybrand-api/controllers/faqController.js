const FAQ = require('../models/FAQ');

exports.getFAQs = async (req, res) => {
  const faqs = await FAQ.find();
  res.json(faqs);
};

exports.createFAQ = async (req, res) => {
  const faq = new FAQ(req.body);
  await faq.save();
  res.status(201).json(faq);
};

exports.updateFAQ = async (req, res) => {
  const updated = await FAQ.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.deleteFAQ = async (req, res) => {
  await FAQ.findByIdAndDelete(req.params.id);
  res.json({ message: 'FAQ deleted' });
};
