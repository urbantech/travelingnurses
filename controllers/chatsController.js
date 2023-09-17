const Chat = require('../models/Chat');
const Message = require('../models/Message');

exports.getChatsForUser = async (req, res) => {
    try {
        const chats = await Chat.find({
            $or: [{ user1: req.user.id }, { user2: req.user.id }]
        }).populate('user1 user2', 'username');
        res.json(chats);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.getMessagesForChat = async (req, res) => {
    try {
        const messages = await Message.find({
            chatId: req.params.chatID
        }).populate('sender', 'username').sort('timestamp');
        res.json(messages);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.createMessage = async (req, res) => {
    try {
        const message = new Message({
            chatId: req.params.chatID,
            sender: req.user.id,
            content: req.body.content
        });
        await message.save();
        res.json(message);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

