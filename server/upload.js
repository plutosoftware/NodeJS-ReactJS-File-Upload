const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    },
});

const uploadStorage = multer({ storage: storage });

// For Single File Upload
// module.exports = uploadStorage.single("file");

// For Multiple File Upload
module.exports = uploadStorage.array("file");
