import express from "express";
import * as dotenv from "dotenv";

import Post from "../mongodb/models/post.js";
import { Configuration } from "openai";

dotenv.config();
const router = express.Router();

const configuration = new Configuration();
