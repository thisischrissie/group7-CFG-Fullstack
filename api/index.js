//imports
import connectDB from "./config/db_utils.js";
import express from "express";
import UserRouter from "./routes/UserRouter.js";
import OwnerRouter from "./routes/OwnerRouter.js";
import DogRouter from "./routes/DogRouter.js";
import { createRequire } from "module";
import cors from 'cors';
const require = createRequire(import.meta.url);


//middleware
const app = express();
const port = 3001;

//middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

//route endpoints for /signup
app.use("/user", UserRouter);

//route endpoints for /owners
app.use("/api", OwnerRouter);

//route endpoints for /dogs
app.use("/api", DogRouter);

//create connection to DB
connectDB();

// TODO: insert script?

//listen on port - keep at the bottom of the file
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
