
import express from "express";
import DogModel from "../models/Dog.js";
const router = express.Router();


//GET endpoint to retrieve list of dogs
router.get("/dogs", async (request, response) => {
  // response.set('Access-Control-Allow-Origin', '*')
  try {
   const dogs = await DogModel.find({});
    response.send(dogs);
  } catch (error) {
    response.status(500).send({ error });
  }
});

//POST endpoint to create new dog profile
router.post("/dog", async (request, response) => {
  const dog = new DogModel(request.body);

  try {
    await dog.save();
    response.send(dog);
  } catch (error) {
    response.status(500).send(error);
  }
});


//PATCH endpoint to update an existing dog profile
router.patch("/dog/:id", async (request, response) => {
  try {
    const dog = await DogModel.findByIdAndUpdate(
      request.params.id,
      request.body
    );
    await dog.save();
    response.send(dog);
  } catch (error) {
    response.status(500).send({ error });
  }
});

export default router;