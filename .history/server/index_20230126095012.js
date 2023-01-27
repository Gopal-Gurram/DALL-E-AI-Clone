import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", async (res, req) => {
  res.send("Hello from DALL-E");
});

const startServer = async () => {
  app.listen(3000, () =>
    console.log("Server is running on http://localhost:3000")
  );
};

startServer();
