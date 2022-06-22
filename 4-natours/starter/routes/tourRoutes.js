const express = require('express');
const {
  getAllTours,
  createTour,
  getTour,
  updateTour,
  deleteTour,
  aliasTopTour,
} = require('../controllers/tourController');

// ROUTES
const router = express.Router();

// router.param('id', checkID);

router.route('/top-5-cheap').get(aliasTopTour, getAllTours);

router.route('/').get(getAllTours).post(createTour);

router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
