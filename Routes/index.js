const Router = require('express');
const router = Router();
const postR = require('./postR.js');
const Webhook = require('./webhook.js');
const Profile = require('./profile.js');

router.use('/posts', postR);
router.use('/webhook', Webhook);
router.use('/redes', Profile);

module.exports = router;