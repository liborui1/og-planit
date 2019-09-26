const admin = require('firebase-admin');

const EXPRESS = require('express'); // server
const CORS = require('cors');

const APP = EXPRESS();  // our app instance
const PORT = 4000;  // Port to run the application on


/**     SETUP VARIABLES AND OTHER REQUIRED DATA     **/
var serviceAccount = require("./og-planit-firebase-serviceAccountKey.json"); // Private key to connect to Firebase services

// Initialize SDK
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://og-planit.firebaseio.com"
});


/****     INITIALIZE SERVER       ****/

// Enable CORS
APP.use(CORS());


/****     API ROUTES      ****/

/**Root page */
APP.get('/', (req, res) => {
    // Template for simple get request.
    res.send('Hello World!')
});


/** Create new user **/
APP.get('/createUser', (req, res) => {
    res.send("hey whats up");
    // Make a request to firebase to create a user
    console.log(req);

    // Return the response back
});


APP.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});