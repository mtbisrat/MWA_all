var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  asyncdata(res);
});

async function asyncdata(response){
  try{
    var output =  await axios.get('http://jsonplaceholder.typicode.com/users/?id=2');
    response.end(JSON.stringify(output.data));
  }
  catch(error){
    res.end(JSON.stringify(error));
  }
}
module.exports = router;
