import express from "express";
import * as dotenv from "dotenv";


import Post from "../mongodb/models/post.js";
import { UploadStream, v2 as cloudinary } from "cloudinary";

dotenv.config();
const router = express.Router();

cloudinary.configure({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,,
});

// get the  all the posts
router.route('/').get((req, res) => {
   try {
     const { name, prompt, photo } = req.body;

    const photoUrl = await cloudinary.uploader.upload(photo);

    const newPost = await Post.create({
        name,
        prompt,
        photo: photoUrl.url
    });
    res.status(201).json({ success: true, data: newPost });
   } catch (error) {
    res.status(500).json({ success:false , message:error
   });
})

//create the posts
router.route('/').post((req, res) => { })

export default router;
