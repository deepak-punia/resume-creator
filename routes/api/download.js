const express = require("express");
const { check, validationResult } = require("express-validator");
const router = express.Router();
const Puppeteer = require("puppeteer");

//create a pdf with
//@data - html data for pdf
const pdf = async (data) => {
	const browser = await Puppeteer.launch();
	const page = await browser.newPage();
	await page.setContent(data);

	const pdf = page.pdf({ format: "A4" });
	await browser.close();
	return pdf;
};

//@route     POST api/download
//@desc      Download resume
//@access    Public
router.get("/", async (req, res) => {
	res.render("main", { msg: "Hello ok" }, async (error, html) => {
		if (error) {
			console.log(error);
		}

		const pdfFile = await pdf(html);
		res.set({
			"Content-Type": "application/pdf",
			"Content-Length": pdf.length,
		});
		res.send(pdfFile);
	});
});

module.exports = router;
