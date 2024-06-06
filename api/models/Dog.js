import mongoose from "mongoose";
// import PhotoModel from "./Photo";

const DogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
  },
  gender: {
    type: String,
    required: true,
  },
  birthday: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    // required: true
  },
  size: {
    type: String,
  },
  temperament: {
    type: String,
  },
  bio: {
    type: String,
  },
  images: [
    {
      URL: {
        type: String,
      },
      Caption: {
        type: String,
      },
    },
  ],
});

const DogModel = mongoose.model("Dog", DogSchema);

export default DogModel;
