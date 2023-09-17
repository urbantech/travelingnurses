/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const functions = require('firebase-functions');
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

// ... your routes and other middleware

exports.api = functions.https.onRequest(app);

