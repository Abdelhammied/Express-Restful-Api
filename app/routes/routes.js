const express = require('express');
const router = express.Router();

/* -- -- -- -- Feeds Starts -- -- -- -- */
const FeedsController = require('../controllers/FeedsController');
router.get('/feeds', FeedsController.index);    

/* -- -- -- -- Feeds Ends -- -- -- -- */
module.exports = router;