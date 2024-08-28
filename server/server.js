import "dotenv/config";
import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();
const { PORT, BACKEND_URL } = process.env

app.listen(PORT, () =>{
    console.log("server is listening");
})
