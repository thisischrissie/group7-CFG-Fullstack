import mongoose from "mongoose";
import ownersData from "../MongoDBscripts/ownersData.js";
import dogsData from "../MongoDBscripts/dogsData.js";
import usersData from "../MongoDBscripts/usersData.js";
import OwnerModel from "../models/Owner.js";
import DogModel from "../models/Dog.js";
import UserModel from "../models/User.js";

async function connectDB() {
  const url = "mongodb://localhost:27017/CollieMeetsBeagle";

  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Database connected: ${url}`);
  } catch (err) {
    console.error(`Connection error: ${err.message}`);
    process.exit(1);
  }
}

async function setupDatabase() {
  // Convert "$oid" to ObjectId for owners
  ownersData.forEach((owner) => {
    owner._id = new mongoose.Types.ObjectId(owner._id.$oid);
    owner.users_id = new mongoose.Types.ObjectId(owner.users_id.$oid);
    owner.dog_ids = owner.dog_ids.map(
      (dogId) => new mongoose.Types.ObjectId(dogId.$oid)
    );
  });

  // Convert "$oid" to ObjectId for dogs
  dogsData.forEach((dog) => {
    dog._id = new mongoose.Types.ObjectId(dog._id.$oid);
  });

  // Convert "$oid" to ObjectId for users
  usersData.forEach((user) => {
    user._id = new mongoose.Types.ObjectId(user._id.$oid);
  });

  try {
    console.log("Attempting to insert owner data...");
    await OwnerModel.insertMany(ownersData);
    console.log("Owner data inserted successfully");
  } catch (error) {
    console.error(`Error inserting owner data: ${error}`);
  }

  try {
    console.log("Attempting to insert dog data...");
    await DogModel.insertMany(dogsData);
    console.log("Dog data inserted successfully");
  } catch (error) {
    console.error(`Error inserting dog data: ${error}`);
  }

  try {
    console.log("Attempting to insert user data...");
    await UserModel.insertMany(usersData);
    console.log("User data inserted successfully");
  } catch (error) {
    console.error(`Error inserting user data: ${error}`);
  }
}

export { connectDB, setupDatabase };
