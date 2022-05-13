
const API_KEY = "NmY3MDM5ZjgtODc3OS00ZGYxLWI3MjMtMTcwM2UxYjE1NTNh";
const ONE_SIGNAL_APP_ID = "d28070dc-7cd3-4f60-8cc3-a096045ab4cd";
const BASE_URL = "https://onesignal.com/api/v1";

var sendNotification = function(data) {

    
    var headers = {
      "Content-Type": "application/json; charset=utf-8",
      "Authorization": "Basic " + API_KEY
    };
    
    var options = {
      host: "onesignal.com",
      port: 443,
      path: "/api/v1/notifications",
      method: "POST",
      headers: headers
    };
    
    var https = require('https');
    var req = https.request(options, function(res) {  
      res.on('data', function(data) {
        console.log("Response:");
        console.log(JSON.parse(data));
      });
    });
    
    req.on('error', function(e) {
      console.log("ERROR:");
      console.log(e);
    });
    
    req.write(JSON.stringify(data));
    req.end();
  };
  
  var message = { 
    app_id: ONE_SIGNAL_APP_ID,
    contents: {"en": "Zwerg bumsti darf auch mal essen juhu"},
    include_player_ids: ["e609af0a-4ec5-453f-b446-212460a52ae5"]            
  };
  
  sendNotification(message);