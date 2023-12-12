const Router = require('express');
const router = Router();
const postR = require('./postR.js');
const Webhook = require('./webhook.js');

router.use('/posts', postR);
router.use('/webhook', Webhook);

module.exports = router;