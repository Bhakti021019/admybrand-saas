const Testimonial = require('../models/Testimonial');

exports.getTestimonials = async (req, res) => {
  const testimonials = await Testimonial.find();
  res.json(testimonials);
};

exports.createTestimonial = async (req, res) => {
  const testimonial = new Testimonial(req.body);
  await testimonial.save();
  res.status(201).json(testimonial);
};

exports.updateTestimonial = async (req, res) => {
  const updated = await Testimonial.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.deleteTestimonial = async (req, res) => {
  await Testimonial.findByIdAndDelete(req.params.id);
  res.json({ message: 'Testimonial deleted' });
};
