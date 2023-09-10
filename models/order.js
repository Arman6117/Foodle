import { Schema, model, models } from "mongoose";

const OrderSchema = new Schema({
  name: String,
  add: String,
  foodItem: String,
  quantity: Number,
  number: Number,
  price: Number,
  userId:String,
  date:String
});

const Order = models.Order || model("Order", OrderSchema);

export default Order;
