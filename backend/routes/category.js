const express = require('express');
const router = express.Router();
const { create } = require('../controllers/category');

// validators
const { runValidation } = require('../validators');
const { categoryCreateValidator } = require('../validators/category');
const { requireSignin, adminMiddleware } = require('../controllers/auth');

router.post(
  '/category',
  categoryCreateValidator,
  requireSignin,
  adminMiddleware,
  runValidation,
  create
);

module.exports = router;
