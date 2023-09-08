import { create } from "zustand";

const useFoodItemStore = create((set) => ({
  foodItem: "",
  foodItemId: null,
  foodName:"",
  foodPrice: null,
  foodQuantity:1,
  
  setFoodName: (name) =>set({foodName:name}),
  setFoodPrice: (price) =>set({foodPrice:price}),
  setFoodQuantity: (quantity) =>set({foodQuantity:quantity}),
  setFoodItem: (name) =>set({foodItem:name}),
  setFoodItemId:(id) => set({foodItemId:id})
   
}));

export default useFoodItemStore;