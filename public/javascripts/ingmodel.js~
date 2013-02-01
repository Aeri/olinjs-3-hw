var mon = require('mongoose')

mon.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/burgers');

var ingSchema = mon.Schema(
  { name: String, price: Number}
);

var orderSchema = mon.Schema({
  customerName: String,
  ingredients : [{ type: mon.Schema.Types.ObjectId, ref: 'Ingredient' }]
});

var newIng = mon.model('newIng', ingSchema);
var Order = mon.model('Order', orderSchema);

module.exports = Order;
module.exports = newIng;


