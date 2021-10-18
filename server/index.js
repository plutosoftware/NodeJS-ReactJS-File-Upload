const express = require("express");
const multer = require("multer");

const app = express();
app.use(express.json());

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    },
});

const uploadStorage = multer({ storage: storage });
const upload = uploadStorage.array("file");

app.post("/api/upload/", async (req, res) => {
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.send(err.message);
        } else if (err) {
            return res.send(err);
        }
        console.log(req.files);
    });
});

app.listen(8020, (err) => {
    if (err) {
        console.log(er);
    } else {
        console.log("Connected");
    }
});
