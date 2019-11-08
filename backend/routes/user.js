const express = require('express');
const router = express.Router();
const {
  requireSignin,
  authMiddleware,
  adminMiddleware,
} = require('../controllers/auth');
const { read, publicProfile } = require('../controllers/user');

router.get('/profile', requireSignin, authMiddleware, read);
// privateprofile
router.get('/user/:username', publicProfile);

module.exports = router;
