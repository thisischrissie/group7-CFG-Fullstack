// import mongoose from "mongoose";
// import ownersData from "../MongoDBscripts/ownersData";
// import dogsData from "../MongoDBscripts/dogsData";
// import usersData from "../MongoDBscripts/usersData";
// import DogModel from "../models/Dog";
// import OwnerModel from "../models/Owner";
// import UserModel from "../models/User";

// export default function connectDB() {
//   const url = "mongodb://localhost:27017/CollieMeetsBeagle";

//   try {
//     mongoose.connect(url, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//   } catch (err) {
//     console.error(err.message);
//     process.exit(1);
//   }
//   const dbConnection = mongoose.connection;

//   dbConnection.once("open", async () => {
//     console.log(`Database connected: ${url}`);

//     ownersData.forEach((owner) => {
//       owner._id = mongoose.Types.ObjectId(owner._id.$oid);
//       owner.users_id = mongoose.Types.ObjectId(owner.users_id.$oid);
//       owner.dog_ids = owner.dog_ids.map((dogId) =>
//         mongoose.Types.ObjectId(dogId.$oid)
//       );
//     });

//     dogsData.forEach((dog) => {
//       dog._id = mongoose.Types.ObjectId(dog._id.$oid);
//     });

//     usersData.forEach((user) => {
//       user._id = mongoose.Types.ObjectId(user._id.$oid);
//     });

//     // Insert owner data
//     try {
//       await OwnerModel.insertMany(ownersData);
//       console.log("Owner data inserted successfully");
//     } catch (error) {
//       console.error(`Error inserting owner data: ${error}`);
//     }

//     // Insert dog data
//     try {
//       await DogModel.insertMany(dogsData);
//       console.log("Dog data inserted successfully");
//     } catch (error) {
//       console.error(`Error inserting dog data: ${error}`);
//     }

//     try {
//       await UserModel.insertMany(usersData);
//       console.log("User data inserted successfully");
//     } catch (error) {
//       console.error(`Error inserting user data: ${error}`);
//     }
//   });

//   dbConnection.on("error", (err) => {
//     console.error(`connection error: ${err}`);
//   });
//   return;
// }
import mongoose from "mongoose";
import ownersData from "../MongoDBscripts/ownersData.js";
import dogsData from "../MongoDBscripts/dogsData.js";
import usersData from "../MongoDBscripts/usersData.js";
import OwnerModel from "../models/Owner.js";
import DogModel from "../models/Dog.js";
import UserModel from "../models/User.js";

export default async function connectDB() {
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

  const dbConnection = mongoose.connection;

  dbConnection.once("open", async () => {
    console.log("Connection to MongoDB established.");

    // Convert "$oid" to ObjectId for owners
    ownersData.forEach((owner) => {
      owner._id = mongoose.Types.ObjectId(owner._id.$oid);
      owner.users_id = mongoose.Types.ObjectId(owner.users_id.$oid);
      owner.dog_ids = owner.dog_ids.map((dogId) =>
        mongoose.Types.ObjectId(dogId.$oid)
      );
    });

    // Convert "$oid" to ObjectId for dogs
    dogsData.forEach((dog) => {
      dog._id = mongoose.Types.ObjectId(dog._id.$oid);
    });

    // Convert "$oid" to ObjectId for users
    usersData.forEach((user) => {
      user._id = mongoose.Types.ObjectId(user._id.$oid);
    });

    try {
      await OwnerModel.insertMany(ownersData);
      console.log("Owner data inserted successfully");
    } catch (error) {
      console.error(`Error inserting owner data: ${error}`);
    }

    try {
      await DogModel.insertMany(dogsData);
      console.log("Dog data inserted successfully");
    } catch (error) {
      console.error(`Error inserting dog data: ${error}`);
    }

    try {
      await UserModel.insertMany(usersData);
      console.log("User data inserted successfully");
    } catch (error) {
      console.error(`Error inserting user data: ${error}`);
    }
  });

  dbConnection.on("error", (err) => {
    console.error(`Connection error: ${err}`);
  });
}
