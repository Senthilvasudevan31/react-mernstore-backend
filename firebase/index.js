
var admin = require("firebase-admin");

var serviceAccount = require("../config/fbserviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ecommerce-30f29.firebaseio.com"
});

module.exports = admin;