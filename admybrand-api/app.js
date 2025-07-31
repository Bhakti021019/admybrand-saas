const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

const featureRoutes = require('./routes/featureRoutes');
const testimonialRoutes = require('./routes/testimonialRoutes');
const faqRoutes = require('./routes/faqRoutes');
const pricingRoutes = require('./routes/pricingRoutes');
const contactRoutes = require('./routes/contactRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// API routes
app.use('/api/features', featureRoutes);
app.use('/api/testimonials', testimonialRoutes);
app.use('/api/faqs', faqRoutes);
app.use('/api/pricing', pricingRoutes);
app.use('/api/contact', contactRoutes);

app.get('/', (req, res) => {
  res.send('ADmyBRAND API is running...');
});

module.exports = app;
