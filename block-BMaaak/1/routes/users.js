var express = require('express');
var router = express.Router();
let User = require("../models/User");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/add', (req, res, next) => {
  let user = new User(req.body);
  user.save((sucess, err) => {
    sucess? console.log(sucess) : console.log(err);
  });
  
});


module.exports = router;
