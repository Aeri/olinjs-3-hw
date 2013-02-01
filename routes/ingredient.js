var ingmodel = require('../public/javascripts/ingmodel');
var Ingredient = ingmodel.Ingredient;

exports.new = function(req, res){
  res.render('ingredient', { title: 'Ingredient List' });
};

exports.create = function(req, res){
  console.log(req.body.ingredient);
  var newIng = new Ingredient({ name: req.body.ingredient, price: req.body.price});
  newIng.save(function (err) {
    if (err)
      return console.log("error we couldn't save new ingredient.");
    // redirect to the list of users
    console.log("Ingredient Saved.");
    res.redirect('/ingredient/new');
  });
};

