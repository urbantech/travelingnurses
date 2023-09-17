const express = require('express');
const router = express.Router();
const classController = require('../controllers/classController');
const isAuth = require('../middleware/isAuth');

router.post('/', isAuth, classController.createClass);
router.get('/', classController.getAllClasses);
router.get('/:classId', classController.getClass);
router.put('/:classId', isAuth, classController.updateClass);
router.delete('/:classId', isAuth, classController.deleteClass);

module.exports = router;

