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
app.use(cors({ origin: "http://FRONTEND-HOST-5173?" }))



// let gods = [
//     {
//         name: '',
//         title: '',
//         pantheon: ''
//     },
//     {

//         name: '',
//         title: '',
//         pantheon: ''
//     },
// ];


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

//   GET god by id
app.get('/api/v1/gods/:id', (req, res) => {
    const god = gods.find((god) => god.name === req.params.name);
});

//   GET gods of a specific pantheon
app.get('/api/v1/gods/pantheon/:pantheon', (req, res) => {
    const pantheon = req.params.pantheon;
    const filteredGods = gods.filter((god) => (god.pantheon === pantheon));
    res.json(filteredGods);
});