const express = require("express");
const router = express.Router();
const multer = require("multer");

router.post("/imgupload", upload.single("image"),  (req, res) => {
    console.log(req.file);
    console.log(req.body);
});

module.exports = router;

