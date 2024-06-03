import express from "express";
import OwnerModel from "../models/Owner.js";
import mongoose from 'mongoose';
const router = express.Router();


//GET endpoint to retrieve list of owners
router.get("/owners", async (response) => {
  try {
   const owners = await OwnerModel.find({});
    response.send(owners);
  } catch (error) {
    response.status(500).send({ error });
  }
});

//GET endpoint to retrieve one owner by ID
// router.get("/owners/:id", async (request, response) => {
//   try {
//     const owner = await OwnerModel.findOne({ _id: request.params.id });
//     response.send(owner);
//   } catch (error) {
//     response.status(500).send({ error });
//   }
// });

//want to change the model to aggregate for the dog details
router.get("/owners/:id", async (request, response) => {
  try {
    const ownerWithDog = await OwnerModel.aggregate([
      {
        $match: { _id: new mongoose.Types.ObjectId(request.params.id) }
      },
      {
        $lookup: {
          from: "dogs", // Name of the dogs collection
          localField: "dog_ids", // Field in the owners collection
          foreignField: "_id", // Field in the dogs collection
          as: "dogs"
        }
      }
    ]);
    console.log(ownerWithDog);
    
    if (ownerWithDog.length === 0) {
      return response.status(404).send({ error: "Owner not found" });
    }

    response.send(ownerWithDog[0]); // Send the first document as the result
  } catch (error) {
    console.log(error)
    response.status(500).send({ error });
  }
});

//POST endpoint to create new user profile
router.post("/owner", async (request, response) => {
  const owner = new OwnerModel(request.body);

  try {
    await owner.save();
    response.send(owner);
  } catch (error) {
    response.status(500).send(error);
  }
});


//PATCH endpoint to update an existing user profile
router.patch("/owners/:id", async (request, response) => {
  try {
    const owner = await OwnerModel.findByIdAndUpdate(
      request.params.id,
      request.body
    );
    await owner.save();
    response.send(owner);
  } catch (error) {
    response.status(500).send({ error });
  }
});


export default router;
