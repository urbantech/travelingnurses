const Certificate = require('../models/Certificate');

exports.getUserCertificates = async (req, res) => {
    try {
        const certificates = await Certificate.find({ user: req.user.id }).populate('class', 
'title');
        res.json(certificates);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.issueCertificate = async (req, res) => {
    try {
        const { userId, classId, certificateUrl } = req.body;

        const certificate = new Certificate({
            user: userId,
            class: classId,
            certificateUrl
        });

        await certificate.save();
        res.json(certificate);
    } catch (err) {
        res.status(500).send('Server error');
    }
};


