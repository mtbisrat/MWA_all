var express = require('express');
const crypto = require('crypto');
const secret=require('../decr/secret');
var router = express.Router();

/* GET secret listing. */
router.get('/', function(req, res, next) {
    const decipher = crypto.createDecipher('aes256', 'asaadsaad');
    secret.getEncryptedMessage().then((message)=>{
        let decrypted = decipher.update(message, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        res.status(200).end(decrypted);
    }).catch((err)=>{res.status(500).end(err)});
});

module.exports = router;