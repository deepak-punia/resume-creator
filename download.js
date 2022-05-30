const express = require("express");
const { check, validationResult } = require("express-validator");
const router = express.Router();
const Puppeteer = require("puppeteer");
const auth = require("./middleware/auth");
const User = require("./models/users");
const Resume = require("./models/resume");
const path = require("path");

//create a pdf with
//@data - html data for pdf
const pdf = async (data) => {
	const browser = await Puppeteer.launch({ headless: true });
	const page = await browser.newPage();
	await page.setContent(data);

	const pdf = await page.pdf({ path: "resume.pdf", format: "A4" });
	await browser.close();
	return pdf;
};

//@route     POST api/download
//@desc      Download resume without registeration / watermark present on pdf file
//@access    Public
router.post("/", async (req, res) => {
	const {
		name,
		address,
		phone,
		email,
		skills1,
		skills2,
		skills3,
		objective,
		education1,
		education2,
		work1,
		work2,
	} = req.body;
	console.log(name);
	res.render(
		"main",
		{
			name: name,
			address: address,
			phone: phone,
			email: email,
			skills1: skills1,
			skills2: skills2,
			skills3: skills3,
			objective: objective,
			education1: education1,
			education2: education2,
			work1: work1,
			work2: work2,
			watermark: true,
		},
		async (error, html) => {
			if (error) {
				console.log(error);
			}

			const pdfFile = await pdf(html);

			res.json({ msg: "created" });
		}
	);
});

//@route     GET api/download
//@desc      Download resume without registeration / watermark present on pdf file
//@access    Public
router.get("/", (req, res) => {
	res.sendFile(`${__dirname}/resume.pdf`);
});

//@route     POST api/download/user
//@desc      Download resume for user without watermark
//@access    Private
router.post("/user", auth, async (req, res) => {
	const {
		name,
		address,
		phone,
		email,
		skills1,
		skills2,
		skills3,
		objective,
		education1,
		education2,
		work1,
		work2,
	} = req.body;

	res.render(
		"main",
		{
			name: name,
			address: address,
			phone: phone,
			email: email,
			skills1: skills1,
			skills2: skills2,
			skills3: skills3,
			objective: objective,
			education1: education1,
			education2: education2,
			work1: work1,
			work2: work2,
			watermark: false,
		},
		async (error, html) => {
			if (error) {
				console.log(error);
			}

			const pdfFile = await pdf(html);

			res.json({ msg: "created" });
		}
	);
});

//@route     POST api/download/save
//@desc      SAVE resume for user without watermark
//@access    Private
router.post("/save", auth, async (req, res) => {
	let resumeData = {};
	resumeData.data = req.body;

	//get user from database
	try {
		const user = await User.findOne({ email: req.user }).select("-password");
		resumeData.userID = user._id;

		const alreadySaved = await Resume.findOne({ userID: user._id });
		if (alreadySaved) {
			return res.json({
				msg: "You already have saved resume. Please edit on edit page.",
			});
		}

		resumeData.userEmail = user.email;
		const resume = new Resume(resumeData);

		const data = await resume.save();

		res.send(data);
	} catch (err) {
		return res.status(500).send("Server Error");
	}
});

module.exports = router;
