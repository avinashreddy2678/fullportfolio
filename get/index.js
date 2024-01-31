import express, { Router } from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
const router = Router(); // Corrected: call Router() to create a new router instance

dotenv.config();
app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGOURI);

 const db = mongoose.connection;
 db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
const Allprojects = mongoose.model('projects',{});

app.use("/", router);

app.get('/', async (req, res) => {
    try {
      const projects = await Allprojects.find();
      res.json(projects);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
