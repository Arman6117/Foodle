import { Schema,model,models } from "mongoose";

const MenuSchema = new Schema({
  foodItemName:String,
  image:String,
  price:Number
});

const Menu = models.Menu || model('Menu',MenuSchema)

export default Menu