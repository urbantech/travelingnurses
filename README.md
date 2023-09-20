# travelingnurses
Open Source Air Bnb for Traveling Nurses
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Your Project Name] API Documentation</title>
</head>

<body>

    <h1>[Your Project Name] API</h1>

    <h2>Description:</h2>
    <p>A brief description of the project.</p>

    <h2>Setting up the API locally:</h2>

    <h3>Prerequisites:</h3>
    <ul>
        <li>Node.js</li>
        <li>npm</li>
        <li>Firebase CLI</li>
    </ul>

    <h3>Steps:</h3>

    <ol>
        <li><strong>Clone the Repository:</strong>
            <pre><code>git clone [YOUR REPO LINK]
cd [REPO NAME]</code></pre>
        </li>

        <li><strong>Install Dependencies:</strong>
            <pre><code>cd functions
npm install</code></pre>
        </li>

        <li><strong>Running the API locally:</strong>
            <p>Start the Firebase emulators for Cloud Functions and Firestore.</p>
            <pre><code>firebase emulators:start --only functions,firestore</code></pre>
        </li>
    </ol>

    <h2>Deploying to Firebase:</h2>

    <ol>
        <li><strong>Login to Firebase:</strong>
            <pre><code>firebase login</code></pre>
        </li>

        <li><strong>Deploy:</strong>
            <pre><code>firebase deploy --only functions</code></pre>
        </li>
    </ol>

    <h2>API Endpoints:</h2>
    <p>Provide a list of the API endpoints, their purpose, required parameters, and any other pertinent information.</p>

</body>

</html>
