const express = require("express");
const router = express.Router();
const Project = require("../models/Project_data");
const { body, validationResult } = require("express-validator");
const multer = require("multer");
// require('')


// ROTE 1 : Get All the Projects using: GET "/api/fetchallprojects". Login Required
router.get("/fetchallprojects", async (req, res) => {
  try {
    const datas = await Project.find({});
    res.json(datas);
    // console.log(datas);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server error Occured");
  }
});

// ROTE 2 : Add new Project using: POST "/api/projects/addproject".

const Storege = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets/img/projectimg");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

upload = multer({ storage: Storege });

router.post("/addproject", upload.single("pimage") ,async (req, res) => {
  try {
    //    if there are Errors, return bad request and errors
    const { pname, pcategory, pclient, pdescription, purl, pimage, date } = req.body;

    const project = new Project({
      pname,
      pcategory,
      pclient,
      pdescription,
      purl,
      pimage,
      date
    });
    const savedproject = await project.save();
    const data = res.json(savedproject);
    console.log(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server error Occured");
  }
});

// ROTE 3 : Delete an existing Project using: DELETE "/api/deleteproject/:id". Login Required
router.delete("/deleteproject/:id", async (req, res) => {
  try {
    // Find the Project to be Deleted and Delete it

    let data = await Project.findById(req.params.id);
    console.log(data);
    if (!data) {
      return res.status(404).send("Not Found/....");
    }
    data = await Project.findByIdAndDelete(req.params.id);
    res.json({ Success: "Project has been Deleted ", data: data });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server error Occured");
  }
});
module.exports = router;
