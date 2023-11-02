const express = require('express');

const router = express.Router();

const genController = require('../controllers/general');

router.get('/get-gen',genController.getGeneral);
router.post('/post-gen',genController.postGen);
router.delete('/delete-gen/:id',genController.deleteGen);

module.exports = router;