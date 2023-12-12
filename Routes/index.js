const {Router} = require('express');
const router = Router();

const Webhook = require('./webhook');

router.use('/webhook', Webhook);

module.exports = router;