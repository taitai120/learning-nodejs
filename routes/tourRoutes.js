const express = require('express');
const {
  getAllTours,
  createTour,
  getTour,
  updateTour,
  deleteTour
} = require('../controllers/tourController');

const router = express.Router();

router.get('/', getAllTours);
router.post('/', createTour);

router.get('/:id', getTour);
router.put('/:id', updateTour);
router.delete('/:id', deleteTour);

module.exports = router;
