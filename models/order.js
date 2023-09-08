import { Schema, model, models } from "mongoose";

const OrderSchema = new Schema({
  name: String,
  address: String,
  itemName: String,
  quantity: Number,
  phoneNumber: Number,
  price: Number,
});

const Order = models.Order || model("Order", OrderSchema);

export default Order;
