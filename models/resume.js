const mongoose = require("mongoose");

const EducationSchema = new mongoose.Schema({
	time: [String],
	university: [String],
	course: [String],
	location: [String],
	achievement: [String],
});
const WorkSchema = new mongoose.Schema({
	time: [String],
	company: [String],
	position: [String],
	location: [String],
	details: [Array],
});

const DataSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	address: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	skills1: {
		type: Array,
	},
	skills2: {
		type: Array,
	},
	skills3: {
		type: Array,
	},
	objetive: {
		type: String,
	},
	education1: {
		type: EducationSchema,
	},

	education2: {
		type: EducationSchema,
	},
	work1: {
		type: WorkSchema,
	},
	work2: {
		type: WorkSchema,
	},
});
const ResumeSchema = new mongoose.Schema({
	data:{
		type: DataSchema,
		required: true,
	},
	userID: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "user",
	},
	userEmail: {
		type: String,
		required: true,
	},
});

const Resume = mongoose.model("resume", ResumeSchema);

module.exports = Resume;
