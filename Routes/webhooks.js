const {Router} = require('express');
const router = Router();

router.get("/", (req, res) => {
// Parse the query params
  let mode = req.query["hub.mode"];
  let token = req.query["hub.verify_token"];
  let challenge = req.query["hub.challenge"];

  // Check if a token and mode is in the query string of the request
  if (mode && token) {
    // Check the mode and token sent is correct
    if (mode === "subscribe" && token === config.verifyToken) {//************* */
      // Respond with the challenge token from the request
       console.dir("WEBHOOK_VERIFIED");
      res.status(200).send(challenge);
    } else {
      // Respond with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403);
    }
  }
});

router.post('/', (req, res) => {
  console.log(JSON.stringify(req.body.entry[0], null, 2));
  let messaging_events = req.body.entry[0].messaging;
  if (req.body.object === 'page'){
  }
  else if (req.body.object === 'instagram'){
    
  }
  for (let i = 0; i < messaging_events.length; i++) {
    let event = messaging_events[i];
    
    if (event.message && event.message.text) {
      sendTextMessage(event.sender.id, "Esto es lo que tu me mandaste: " + event.message.text);
    }
  }
  res.sendStatus(200);
});

const sendTextMessage = async (sender, text) => {
  let messageData = { text: text };
  await request({
    url: 'https://graph.facebook.com/v18.0/196135773574850/messages?access_token=EAAMiTygMXF4BOxcODZBMraZCEoqxq3cTrZA6Cp5Pa8dqhrfT61ZBjH6qGHDr6iznKanNxIjpC0ZAVZAWrHfAbQo0pLkgsnRhBBEYckjNL6K5COi7C6WZBskI7sWZCSvU2gZCAbmZBw3AMVlZBOA4zD4kHCYpEofmHrpZA9ylYhqlCABuGveQAmnlRbmWkJbKP8hQSMeRP3TOy5xW',  // Use the appropriate API version
    //********************************* */
    method: 'POST',
    json: {
      recipient: { id: sender },
      message: messageData,
    }
  });
}