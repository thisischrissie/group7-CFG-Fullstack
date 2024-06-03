import express from "express";
import OwnerModel from "../models/Owner.js";
const router = express.Router();


//GET endpoint to retrieve list of owners
router.get("/owners", async (request, response) => {
  try {
   const owners = await OwnerModel.find({});
    response.send(owners);
  } catch (error) {
    response.status(500).send({ error });
  }
});

//GET endpoint to retrieve one owner by ID
router.get("/owners/:id", async (request, response) => {
  try {
    const owner = await OwnerModel.findOne({ _id: request.params.id });
    response.send(owner);
  } catch (error) {
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
