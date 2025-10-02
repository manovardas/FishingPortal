import mongoose from "mongoose";

// Schema tik su Title
const NewsSchema = new mongoose.Schema({
  Title: { type: String, required: true }
});

// Modelis
export const Newstheme = mongoose.model("News_theme", NewsSchema, "News_theme");
