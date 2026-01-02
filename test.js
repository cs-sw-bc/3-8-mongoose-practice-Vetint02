import mongoose from "mongoose";
import Product from "./models/product.js";
import Chef from "./models/chef.js";

const mongoURL = "mongodb://localhost:27017/recipeDB";

mongoose.connect(mongoURL)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
    console.error("Error connecting to MongoDB:", err)});

// You can add test cases here to create, read, update, or delete Product and Chef documents.
async function createProduct() {
    const newProduct = await Product.create({
        name: "Spaghetti Bolognese",
        cuisine: "Italian",
        cookingTime: 45,
        isVegetarian: false,
        category: [{Category: "Pasta"}, {Category: "Main Course"}],
        ingredients: [
            {Ingredient: "Spaghetti"},
            {Ingredient: "Ground Beef"},
            {Ingredient: "Tomato Sauce"}
        ],
        instructions: [
            {step: "Boil spaghetti"},
            {step: "Cook ground beef"},
            {step: "Add tomato sauce"},
            {step: "Simmer for 20 minutes"},
            {step: "Combine ingredients"}
        ]
    })
}

async function updateProduct() {
    const res = await Product.updateOne(
        {name: "Spaghetti Bolognese"},
        {$set: {cookingTime: 40}}
    )
    console.log("Updated:", res);
}

async function deleteProduct() {
    const res = await Product.deleteOne({name: "Spaghetti Bolognese"});
    console.log("Deleted:", res);
}

// Uncomment to run the functions
createProduct();
// updateProduct();
// deleteProduct();