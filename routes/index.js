var express = require('express');
var router = express.Router();
const mobile_app = require('../models/mobile_application');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Parcial Final' });
});

router.post('/add', async (req,res) => {
const app = new mobile_app(req.body);
await app.save();
res.send('recibido')
}) 

module.exports = router;
