var ingmodel = require('../public/javascripts/ingmodel');
var Order = ingmodel.Order;
var Ing = ingmodel.Ingredient;

exports.new = function(req, res) {
  console.log("Piping is working.");
  Ing.find({}).exec(function(err, db_ingredients) {
    if (err)
      console.log("Error rendering order");
    res.render("order", {title:"Add Order.", ingredients: db_ingredients});
  });
};

exports.create = function(req, res) {
  console.log("Burger ordered.");
  var orderIngredients = [];
  console.log(req.body.ingredients);
  reqIngredients = req.body.ingredients || [];
  reqIngredients.forEach(function (ingredient) {
    Ing.findOne({'name': ingredient}, function(err, db_ingredients){
    orderIngredients.push(db_ingredients);});
  });
  console.log(orderIngredients);
  buildOrder(orderIngredients, req.body.customerName);
  res.send("Order saved.");
};

exports.list = function(req, res) {
  console.log("Piping is working.");
  Order.find({}).populate('ingredients').exec(function(err, db_orders) {
    if (err)
      console.log("Error rendering order list.");
    res.render("orderlist", {title:"Current Orders", orders: db_orders});
  });
};

exports.complete = function(req, res) {
  console.log("Order completed.");
  Order.remove({_id: req.body.id}).exec(function (err, order) {
    if (err)
      console.log("Error", err)
    res.send("Order completed.");
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
