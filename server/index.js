const express = require("express");
const cors = require("cors");
const multer = require("multer");
const upload = require("./upload");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/api/upload/", async (req, res) => {
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            res.status(400);
        } else if (err) {
            res.status(400);
        }
        res.status(200).json({ message: "OK" });
    });
});

app.listen(8020, (err) => {
    if (err) {
        console.log(er);
    } else {
        console.log("Connected");
    }
});
