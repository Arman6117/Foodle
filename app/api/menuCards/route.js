import Menu from "@/models/menu";
import { connectDb } from "@/utils/database";

export const POST = async (request) => {
  const { foodItemName, image, price } = await request.json();

  try {
    await connectDb();
    const existingFoodItem = await Menu.findOne({ foodItemName: foodItemName });

    if (existingFoodItem) {
      existingFoodItem.foodItemName = foodItemName;
      existingFoodItem.price = price;
      existingFoodItem.image = image;

      await existingFoodItem.save();
      return new Response("Saved Successfully", { status: 201 });
    } else {
      const newMenuItem = new Menu({ foodItemName, image, price });
      await newMenuItem.save();
      return new Response("Saved Successfully", { status: 201 });
    }
  } catch (error) {
    console.log(error.message);
    return new Response("Failed to save", { status: 500 });
  }
};

