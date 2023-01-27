import express from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

import Post from "../mongodb/models/post.js";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();
const router = express.Router();

cloudinary.configure({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,,
});

export default router;
