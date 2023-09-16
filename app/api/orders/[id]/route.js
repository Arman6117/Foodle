import { connectDb } from "@/utils/database";
import Order from "@/models/order";

export const GET = async (request, { params }) => {
  try {
    await connectDb();

    const orders = await Order.find({ userId: params.id } || {_id:params.id});

    return new Response(JSON.stringify(orders), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch orders", { status: 500 });
  }
};

export const DELETE = async(request,{params})=>{
  try {
    await connectDb();

    await Order.findOneAndRemove(params.id);
    
    return new Response("Order deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch orders", { status: 500 });
  }
}

