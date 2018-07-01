var express = require('express');
var router = express.Router();
var axios = require('axios');
/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get('http://jsonplaceholder.typicode.com/users/?id=1')
  .then(function(respon){
    res.end(JSON.stringify(respon.data));
  })
  .catch(function (error){
    res.render('index', { title: 'error' });
  });  
});

module.exports = router;
