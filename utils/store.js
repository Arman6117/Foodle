import { create } from "zustand";

const useFoodItemStore = create((set) => ({
  foodItem: "",
  foodItemId: null,
  foodName:"",
  foodPrice: null,
  foodQuantity:1,
  number:null,
  orderDate:null,
  orderAdd:'',
  cusName:'',
  orderId:"",
  setFoodName: (name) =>set({foodName:name}),
  setFoodPrice: (price) =>set({foodPrice:price}),
  setFoodQuantity: (quantity) =>set({foodQuantity:quantity}),
  setFoodItem: (name) =>set({foodItem:name}),
  setFoodItemId:(id) => set({foodItemId:id}),
  setNumber:(number) => set({number:number}),
  setDate:(date) => set({orderDate:date}),
  setAdd:(add) => set({orderAdd:add}),
  setCusName:(name) => set({cusName:name}),
  setOrderId:(Id)=>set({orderId:Id})
   
}));

export default useFoodItemStore;