const Event = require('../models/Event');

exports.getEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.createEvent = async (req, res) => {
    try {
        const { title, description, date, location } = req.body;

        const event = new Event({
            title,
            description,
            date,
            location
        });

        await event.save();
        res.json(event);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.registerForEvent = async (req, res) => {
    try {
        const event = await Event.findById(req.params.eventId);
        if (!event) {
            return res.status(404).json({ msg: 'Event not found' });
        }

        const attendee = {
            user: req.user.id
        };

        event.attendees.push(attendee);
        await event.save();

        res.json(event.attendees);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

