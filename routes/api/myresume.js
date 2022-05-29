const express = require("express");
const { check, validationResult } = require("express-validator");
const router = express.Router();
const auth = require("../../middleware/auth");
const User = require("../../models/users");
const Resume = require("../../models/resume");

//@route     GET api/myresume
//@desc      send resume for user 
//@access    Private
router.get("/", auth, async (req, res) => {
	
    let resumeData = {};
	

	//get user from database
	try {
		const user = await User.findOne({ email: req.user }).select("-password");
		const resume = await Resume.findOne({ userID: user._id });
		if (!resume) {
			return res.status(400).json({
				msg: "You don't have any resume saved. Please create one.",
			});
		}
		resumeData = resume.data;
		res.json(resumeData);
	} catch (err) {
		console.log(err);
		return res.status(500).send("Server Error");
	}
});

//@route     POST api/myresume
//@desc      Update resume for user 
//@access    Private
router.post("/", auth, async (req, res) => {
	
    let resumeData = {};
	resumeData.data = req.body;

	//get user from database
	try {
		const user = await User.findOne({ email: req.user }).select("-password");
		resumeData.userID = user._id;

		const alreadySaved = await Resume.findOne({ userID: user._id });
		if (!alreadySaved) {
			return res.status(400).json({
				msg: "You don't have saved resume. Please create one and save.",
			});
		}
		resumeData.userEmail = user.email;
		await Resume.findOneAndUpdate({userID: user._id}, resumeData);
		res.json({ msg: "Data is Updated in Database." });
	} catch (err) {
		console.log(err);
		return res.status(500).send("Server Error");
	}
});

module.exports = router;