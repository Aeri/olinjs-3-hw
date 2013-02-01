var ingmodel = require('../public/javascripts/ingmodel');
var nOrder = ingmodel.Order;
var nIng = ingmodel.newIng;

exports.new = function(req, res) {
  console.log("Piping is working.");
  nIng.find({}).exec(function(err, db_ingredients) {
    if (err)
      console.log("Error rendering order");
    res.render("order", {title:"Add Order.", ingredients: db_ingredients});
  });
};

exports.create = function(req, res) {
  console.log("Burger ordered.");
  var orderIngredients = [];
  console.log(req.body.ingredients);
  req.body.ingredients.forEach(function (ingredient) {
    nIng.findOne({'name': ingredient}, function(err, db_ingredient){
    orderIngredients.push(db_ingredient);
      if (orderIngredients.length == req.body.ingredients.length) {
        console.log(orderIngredients);
        buildOrder(orderIngredients, req.body.customerName);
      }
      });
  });
};

exports.list = function(req, res) {
  console.log("Piping is working.");
  nOrder.find({}).populate('ingredients').exec(function(err, db_orders) {
    if (err)
      console.log("Error rendering order list.");
    res.render("orderlist", {title:"Current Orders", orders: db_orders});
  });
};

exports.complete = function(req, res) {
  console.log("Order completed.");
  nOrder.remove({_id: req.body.id}).exec(function (err, order) {
    if (err)
      console.log("Error", err)
  });
};

buildOrder = function(orderIngredients, customerName) {
  console.log("Building Order");
  var order = new Order({ customerName: customerName, ingredients : orderIngredients });
  order.save(function (err) {
    if (err)
      console.log("Error");
  });
}
