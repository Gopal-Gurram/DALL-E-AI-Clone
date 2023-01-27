import express from "express";
import * as dotenv from "dotenv";
import { Configuration, openAIApi } from "openai";

import Post from "../mongodb/models/post.js";

dotenv.config();
const router = express.Router();
