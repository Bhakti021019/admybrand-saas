const express = require('express');
const {
  getFeatures,
  createFeature,
  updateFeature,
  deleteFeature,
} = require('../controllers/featureController');

const router = express.Router();

router.get('/', getFeatures);
router.post('/', createFeature);
router.put('/:id', updateFeature);
router.delete('/:id', deleteFeature);

module.exports = router;
