import mongoose from "mongoose";
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
  images: {
    type: [String],
    default: undefined
    }
});
const DogModel = mongoose.model("Dog", DogSchema);

export default DogModel;