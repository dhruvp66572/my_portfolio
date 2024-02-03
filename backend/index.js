const connectToMongo = require("./db");
const express = require("express");
const multer = require("multer");

connectToMongo();

const app = express();
const port = 5000;
var cors = require("cors");

app.use(express.json());
app.use(cors());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/assets/img/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+file.originalname  );
  },
});

const upload = multer({ storage: storage });

app.post("/api/imagupload/", upload.single('image'),(req, res) =>{
   console.log(req.file.filename);
   console.log(req.body);
   res.status(200).json({ status: "ok" });
    // Everything went fine.
    console.log("Image Uploaded Successfully");
});

// Available Routes
app.use("/api/", require("./routes/contactdata"));

app.listen(port, () => {
  console.log(`Backend Listening at http://localhost:${port}`);
});
