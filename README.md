# 🍲 Assignment – Recipe Manager (Mongoose One‑to‑Many Embedded Data)

## 🎯 Goal

Build a small backend data layer using **one Mongoose model** that contains:

* A recipe
* A list of embedded ingredient objects
* A list of instruction steps

Students will practice:

* Designing schemas
* Using nested fields
* Performing CRUD operations
* Running queries
* Working in a simple Node.js + Mongoose environment

---

# ⭐ Part 1 — Data Model Requirements

You will create **two models**: a main **Recipe** model and a secondary **Chef** model to make the database relational.
You will create **one main model: Recipe**, which contains both simple fields and complex embedded fields.

## ✔ Simple Fields (basic data)

Your Recipe schema must include:

* **title** (string)
* **cuisine** (string or enum)
* **cookingTime** (number, in minutes)
* **isVegetarian** (boolean)
* **createdAt** (date with a default value)

These are straightforward fields that describe the basic information about the recipe.

---

## ✔ Complex Fields (nested / array fields)

Your Recipe model must also include structured, more complex fields:

### **Ingredients (embedded array of objects)**

A recipe must contain **multiple ingredients**, and each ingredient should be an embedded object with:

* **ingredientName** (string)
* **quantity** (string — e.g., "1 cup", "2 tbsp")
* **category** (string — e.g., vegetable, spice, protein, dairy, grain)

### **Cooking Instructions (array of strings)**

A recipe must include **step-by-step instructions**, each stored as a string.
Examples:

* "Preheat the oven to 180°C"
* "Chop the onions"
* "Simmer for 10 minutes"

---

---

# ⭐ Chef Model Requirements (Second Model)

To make this a proper multi-collection database, you will create a **Chef** model. Each recipe must be linked to one chef.

## ✔ Chef Model (required)

Your Chef schema should include the following conceptual fields:

* **name** (string)
* **email** (string, unique)
* **specialtyCuisine** (string or enum)
* **yearsOfExperience** (number)

You may optionally include fields such as biography, rating, or social media handle.


---

# ⭐ Part 2 — Data Creation Requirements

— Data Creation Requirements
Create the following in your `test.js` script:

### ✔ At least 3 recipes

Each recipe must include:

* 3–6 ingredients
* 4–10 instruction steps
* realistic values for cuisine, cookingTime, etc.

---

# ⭐ Part 3 — CRUD Requirements

Inside your `test.js` file, perform the following:

## ✔ CREATE

* Insert multiple recipe documents

## ✔ READ

Write queries to:

* Return all recipes
* Find recipes under a certain cookingTime
* Find vegetarian recipes
* Find recipes containing a specific **ingredient name**
* Sort recipes by cooking time

## ✔ UPDATE

Write operations to:

* Change a recipe’s cookingTime
* Add a new ingredient to a recipe
* Add a new instruction step
* Edit an existing ingredient’s quantity
* Edit an instruction step

## ✔ DELETE

Write operations to:

* Remove one ingredient from a recipe
* Delete one entire recipe
* (Optional) delete all recipes of a certain cuisine

---

# ⭐ Part 4 — Advanced Queries

Write queries to:

### ✔ Search by ingredient keyword

Return recipes where **any ingredientName** contains a certain word.

### ✔ Search cooking instructions

Return recipes where any instruction contains a specific keyword.

### ✔ Filter by ingredient count

Find recipes that have **more than 4 ingredients**.

### ✔ Sort by number of instruction steps

Sort ascending and descending.

### ✔ Count queries

Count:

* how many vegetarian recipes exist
* how many recipes contain more than 5 steps

---

# ⭐ Part 5 — Bonus Challenges (Optional)

Choose any of the following if you want to push yourself:

### ➤ Add a difficulty field

Values: easy, medium, hard.

### ➤ Add a rating field

Store a number between 1–5.

### ➤ Create a second model (optional)

Example: `Review` with reviewer name, comment, stars.

### ➤ Add pagination queries

Use skip + limit.

---


This assignment lets you practice real database modeling using embedded structures, CRUD operations, and querying in Mongoose.
