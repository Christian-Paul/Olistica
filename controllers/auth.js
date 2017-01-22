var express = require('express');
var router = express.Router();

const CLIENT_ID = "696320046142-po33f20q5n669k31o48mr05kucs39p39.apps.googleusercontent.com";

var GoogleAuth = require('google-auth-library');
var auth = new GoogleAuth;
var client = new auth.OAuth2(CLIENT_ID, '', '');


router.get('/google-signin/:idtoken', function (req, res) {
  var token = req.params.idtoken;

  console.log('attempting google sign in');

  client.verifyIdToken(
      token,
      CLIENT_ID,
      function(e, login) {
        var payload = login.getPayload();
        var userid = payload['sub'];
        // If request specified a G Suite domain:
        //var domain = payload['hd'];
        if (e) {
          console.log("Error authenticating google token");
          res.send({
            error: "Error authenticating google token"
          });
        } else {

          req.session.userId = userid;

          console.log(userid);

          res.send({
            "status": "success"
          });
        }
      });
});


module.exports = router;
