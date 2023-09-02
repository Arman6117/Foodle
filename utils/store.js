import { create } from "zustand";

const useFoodItemStore = create((set) => ({
  foodItemName: "",
  foodItemId: null,

  setFoodItemName: (name) =>set({foodItemName:name}),
  setFoodItemId:(id) => set({foodItemId:id})
   
}));

export default useFoodItemStore;