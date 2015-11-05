Orders = new Mongo.Collection('orders');

Meteor.methods({

  addOrder: (order) => {
    
    check(order, {
      restaurantId: String,
      by: String,
      deliveryFee: Number,
      closes: Date,
      delivery: Date
    });

    if (!Restaurants.find({_id: order.restaurantId})) {
      throw new Meteor.Error(403, 'Invalid restaurant');
    } else {
      return Orders.insert(order);
    }
  },

  removeOrder: (id) => {
    Orders.remove(id);
  }

});