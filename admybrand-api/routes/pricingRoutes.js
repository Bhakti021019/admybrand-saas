const express = require('express');
const {
  getPricing,
  createPricing,
  updatePricing,
  deletePricing,
} = require('../controllers/pricingController');

const router = express.Router();

router.get('/', getPricing);
router.post('/', createPricing);
router.put('/:id', updatePricing);
router.delete('/:id', deletePricing);

module.exports = router;
