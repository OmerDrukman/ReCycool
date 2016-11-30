var express = require('express');
var router = express.Router();
var pointController = require('../controllers/pointController.js');

/*
 * GET
 */
router.get('/', pointController.list);

/*
 * GET
 */
router.get('/:id', pointController.show);

/*
 * POST
 */
router.post('/', pointController.create);

/*
 * PUT
 */
router.put('/:id', pointController.update);

/*
 * DELETE
 */
router.delete('/:id', pointController.remove);

module.exports = router;
