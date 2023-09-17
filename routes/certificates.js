const express = require('express');
const router = express.Router();
const certificatesController = require('../controllers/certificatesController');
const isAuth = require('../middleware/isAuth');

router.get('/mycertificates', isAuth, certificatesController.getUserCertificates);
router.post('/issue', isAuth, certificatesController.issueCertificate);

module.exports = router;

