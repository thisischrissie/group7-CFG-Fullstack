import mongoose from "mongoose";
const OwnerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true
    },
    dog_ids: {
        type: [mongoose.ObjectId],
        default: undefined
    }
});
const OwnerModel = mongoose.model("Owner", OwnerSchema);
export default OwnerModel;