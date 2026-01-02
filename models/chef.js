import mongoose from 'mongoose';

const chefSchema = new mongoose.Schema({
    name: {type:String, required:true},
    email: {type:String, required:true, unique:true},
    specialtyCuisine: {type:String, required:true},
    yearsOfExperience: {type:Number, required:true}
})

const Chef = mongoose.model("Chef", chefSchema);
export default Chef;