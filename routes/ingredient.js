var newIng = require('../public/javascripts/ingmodel')

exports.new = function(req, res){
  res.render('ingredient', { title: 'Ingredient List' });
};

exports.create = function(req, res){
  console.log(req.body.ingredient);
  var dude = new newIng({ name: req.body.ingredient, price: req.body.price});
  dude.save(function (err) {
    if (err)
      return console.log("error we couldn't save new ingredient cheese.");
    // redirect to the list of users
    console.log("Ingredient Saved.");
    res.redirect('/ingredient/new');
  });
};
