import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import { Newstheme } from "./models/NewsTheme";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Log in to MongoDB
mongoose.connect(process.env.MONGO_URI as string)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

// =====================
// News_theme endpointai
// =====================
app.get("/news", async (req, res) => {
  try {
    const news = await Newstheme.find(); 
    res.json(news);
  } catch (err) {
    res.status(500).json({ message: "Error fetching news", error: err });
  }
});

app.post("/news", async (req, res) => {
  try {
    const newNews = new Newstheme(req.body); 
    await newNews.save();
    res.status(201).json(newNews);
  } catch (err) {
    res.status(400).json({ message: "Error creating news", error: err });
  }
});

// Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
