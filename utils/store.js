import { create } from "zustand";

const useFoodItemStore = create((set) => ({
  foodItem: "",
  foodItemId: null,
  foodName:"",
  foodPrice: null,
  
  setFoodName: (name) =>set({foodName:name}),
  setFoodPrice: (price) =>set({foodPrice:price}),
  setFoodItem: (name) =>set({foodItem:name}),
  setFoodItemId:(id) => set({foodItemId:id})
   
}));

export default useFoodItemStore;