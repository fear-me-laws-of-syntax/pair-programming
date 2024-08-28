import "dotenv/config";
import express from "express";
import fs from "fs";
import cors from "cors";
//import { v4 as uuidv4 } from 'uuid';


const app = express();
const { PORT, BACKEND_URL } = process.env

app.listen(PORT, () => {
    console.log("server is listening");
})

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }))

app.get("/", (_req, res) => {
    console.log("Received a GET request to /");
    res.send("Hey, here is your response");
});
// GET all gods
app.get('/api/v1/gods', (_req, res) => {
    const godsFile = fs.readFileSync("./data/smite2.json");
    const gods = JSON.parse(godsFile);
    res.json(gods);
});

//   GET god by name
app.get('/api/v1/gods/:name', (req, res) => {
    const godsFile = fs.readFileSync("./data/smite2.json");
    const gods = JSON.parse(godsFile);
    const name =req.params.name;
    const god = gods.find((god) => god.name.toLowerCase() === name);
    res.json(god);
});

//   GET gods of a specific pantheon
app.get('/api/v1/gods/pantheon/:pantheon', (req, res) => {
    const godsFile = fs.readFileSync("./data/smite2.json");
    const gods = JSON.parse(godsFile);
    const pantheon = req.params.pantheon;
    const filteredGods = gods.filter((god) => (god.summary.pantheon.toLowerCase() === pantheon));
    res.json(filteredGods);
});