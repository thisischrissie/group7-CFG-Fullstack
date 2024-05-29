import mongoose from "mongoose";

const PhotoSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    }, 
    caption: {
        type: String,
        required: true
    }
})

const PhotoModel = mongoose.model("Photo", PhotoSchema);

export default PhotoModel;
