const express = require('express');
const router = express.Router();
const chatsController = require('../controllers/chatsController');
const isAuth = require('../middleware/isAuth');

router.get('/', isAuth, chatsController.getChatsForUser);
router.get('/:chatID', isAuth, chatsController.getMessagesForChat);
router.post('/:chatID', isAuth, chatsController.createMessage);

module.exports = router;

