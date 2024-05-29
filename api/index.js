//imports
import connectDB from "./config/db_utils.js"; 
import express from 'express';
import OwnerRouter from "./routes/OwnerRouter.js"
import DogRouter from "./routes/DogRouter.js";

//middleware
const app = express()
const port = 3000
 
app.use(express.json());

//route endpoints for /owners
app.use("/api", OwnerRouter);

//route endpoints for /dogs
app.use("/api", DogRouter);

//create connection to DB
connectDB();                            



//endpoint to create sign up - For Cecilia?
app.post('/api/sign-up', (req, res) => {
    res.send('Sign up with us')
  })



//listen on port - keep at the bottom of the file
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  