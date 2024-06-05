import mongoose from "mongoose";

const OwnerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    bio: {
        type: String,
        required: true
    }
});

const OwnerModel = mongoose.model("Owner", OwnerSchema);

export default OwnerModel; 
