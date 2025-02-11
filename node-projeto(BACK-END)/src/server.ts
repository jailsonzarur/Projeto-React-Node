import express from "express";
import { config } from "dotenv";

config();

const app = express();

app.use(express.json());

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => console.log(`Listening on port: ${port}`));

