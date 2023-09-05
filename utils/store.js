import { create } from "zustand";

const useFoodItemStore = create((set) => ({
  foodItem: "",
  foodItemId: null,
  foodName:"",
  setFoodName: (name) =>set({foodName:name}),

  setFoodItem: (name) =>set({foodItem:name}),
  setFoodItemId:(id) => set({foodItemId:id})
   
}));

export default useFoodItemStore;