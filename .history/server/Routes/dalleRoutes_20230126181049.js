import express from "express";
import * as dotenv from "dotenv";

import Post from "../mongodb/models/post.js";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();
const router = express.Router();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

router.route("/").get((req, res) => {
  res.send("hello world from dalle-e");
});

export default router;
