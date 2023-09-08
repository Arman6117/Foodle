import Order from "@/models/order";
import { connectDb } from "@/utils/database";

const POST = async (request) => {
  const { name, add, foodItem, quantity, number, price } = await request.json();

  try {
    await connectDb();

    const newOrderItem = new Order({
      name,
      add,
      foodItem,
      quantity,
      number,
      price,
    });
    await newOrderItem.save();

    return new Response("Saved Successfully", { status: 201 });
  } catch (error) {
    console.log(error.message);
    
    return new Response("Failed to save order", { status: 500 });
  }
};
