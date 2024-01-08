const express = require("express");
const router = express.Router();
const Note = require("../models/Contact_data");
const { body, validationResult } = require("express-validator");

// ROTE 1 : Get All the Notes using: GET "/api/fetchalldata". Login Required
router.get("/fetchalldata",async (req, res) => {
  try {
    const datas = await Note.find({});
     res.json(datas);
    // console.log(datas);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server error Occured");
  }
});

// ROTE 2 : Add new Note using: POST "/api/notes/addcontact". Login Required
router.post(
  "/addcontact",
  [
    //Set Validation
    body("cname", "Enter valid Name").isLength({ min: 3 }),
    body("cemail", "Enter valid Email").isEmail(),
    body("csubject", "Enter valid Subject").isLength({ min: 3 }),
    body("description", "Enter valid Description").isLength({ min: 5 }),
  ],
  async (req, res) => {
    try {
      // if there are Errors, return bad request and errors
      const { cname, description, csubject, cemail } = req.body;

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const set = new Note({
        cname,
        csubject,
        cemail,
        description
      });

      const savedset = await set.save();

      res.json(savedset);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server error Occured");
    }
  }
);

// ROTE 3 : Delete an existing Data using: DELETE "/api/deletetedata/:id". Login Required
router.delete("/deletedata/:id", async (req, res) => {
  try {
    // Find the note to be Deleted and Delete it

    let data = await Note.findById(req.params.id);
    console.log(data);
    if (!data) {
      return res.status(404).send("Not Found/....");
    }
    data = await Note.findByIdAndDelete(req.params.id);
    res.json({ Success: "Note has been Deleted ", data: data });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server error Occured");
  }
});
module.exports = router;
