import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {type:String, required:true},
    cuisine: {type:String, required:true},
    cookingTime: {type:Number, required:true}, // in minutes
    isVegetarian: {type:Boolean, required:true},
    createdAt: {type:Date, default:Date.now},
    category: [{Category: String}],
    ingredients: {
    type: [String], // The type is an array of strings
    required: true,
    validate: {
      validator: function(v) {
        return v && v.length >= 3 && v.length <= 6;
      },
      message: 'Recipes must have between 3 and 6 ingredients.'
        }
    },
    instructions: {
        type: [String],
        required: true,
        validate: {
            validator: function(v) {
            return v && v.length >= 4 && v.length <= 10;
            },
            message: 'Instructions must have between 4 and 10 steps.'
        }
    }
});

const Product = mongoose.model("Product", productSchema);
export default Product;