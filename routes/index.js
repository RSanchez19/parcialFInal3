var express = require('express');
var router = express.Router();
const mobile_app = require('../models/mobile_application');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '¡Aplicaciones Moviles!' });
});

router.get('/', async(req,res) =>{
  const newMobile_app = await mobile_app.find();
  res.render('index',{
    newMobile_app
  });
}); 


router.post('/add', async (req,res) => {
const {app_name, app_os, app_language, app_type, app_multi_plattform} = req.body; 
const errors = []
if(!app_name){
  errors.push({text: "ERROR. Ingrese el nombre de la aplicacion"})
}
if(!app_os){
  errors.push({text: "ERROR. Especifique el sistema operativo"})
}
if(!app_language){
  errors.push({text: "ERROR. Ingrese el lenguaje de la aplicacion"})
}
if(errors.length > 0){
   res.render('index', {errors, app_name, app_os, app_language})
}else{
  const newMobile_app = new mobile_app({app_name, app_os, app_language,
  app_type, app_multi_plattform});
  await newMobile_app.save();
  res.render('index');
  }
}) 

module.exports = router;

