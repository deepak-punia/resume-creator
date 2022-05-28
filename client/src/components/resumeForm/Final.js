import { Form, Button, Container, Col, Row } from "react-bootstrap";
import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import { dwnldResume } from "../../actions/resume";
import { useSelector, useDispatch } from 'react-redux';
import { saveAs } from 'file-saver';
import axios from "axios";

const Final = () => {

	const file = useSelector(state=>state.resume);

	const dispatch= useDispatch();
	//testing validation
	const [validated, setValidated] = useState(false);

	//test code ends
	const [details, setdetails] = useState({
		detail1: "s",
		detail2: "s",
		detail3: "s",
		detail4: "s",
	});

	const [skills, setskills] = useState({
		skills1: "s",
		skills2: "s",
		skills3: "s",
		skills4: "s",
		skills5: "s",
		skills6: "s",
	});

	const [formData, setformData] = useState({
		name: "s",
		address: "s",
		phone: "s",
		email: "s",
		skills1: [],
		skills2: [],
		skills3: [],
		objective: "s",
		education1: {
			time: "s",
			university: "s",
			course: "s",
			location: "s",
			achievement: "s",
		},
		education2: {
			time: "s",
			university: "s",
			course: "s",
			location: "s",
			achievement: "s",
		},
		work1: {
			time: "s",
			company: "s",
			position: "s",
			location: "s",
			details: [],
		},
		work2: {
			time: "s",
			company: "s",
			position: "s",
			location: "s",
			details: [],
		},
	});
	//state for steps
	const [step, setstep] = useState(1);

	// function for going to next step by increasing step state by 1
	const nextStep = (e) => {
		e.preventDefault();
		setstep(step + 1);
	};

	// function for going to previous step by decreasing step state by 1
	const prevStep = (e) => {
		e.preventDefault();
		setstep(step - 1);
	};

	//handle form data
	const handleChange = (e) => {
		setformData({ ...formData, [e.target.name]: e.target.value });
	};

	//handle form data Field education1
	const handleEducation1 = (e) => {
		setformData((formData) => ({
			...formData,
			education1: { ...formData.education1, [e.target.name]: e.target.value },
		}));
	};

	//handle form data Field education2
	const handleEducation2 = (e) => {
		setformData((formData) => ({
			...formData,
			education2: { ...formData.education2, [e.target.name]: e.target.value },
		}));
	};

	//handle form data Field work1
	const handleWork1 = (e) => {
		setformData((formData) => ({
			...formData,
			work1: { ...formData.work1, [e.target.name]: e.target.value },
		}));
	};

	//handle form data Field work2
	const handleWork2 = (e) => {
		setformData((formData) => ({
			...formData,
			work2: { ...formData.work2, [e.target.name]: e.target.value },
		}));
	};

	//handle form data skills1, skills2, skills3
	const handleSkills = (e) => {
		setskills((skills) => ({
			...skills,
			[e.target.name]: e.target.value,
		}));
	};

	//handle form details
	const handleDetails = (e) => {
		setdetails((details) => ({
			...details,
			[e.target.name]: e.target.value,
		}));
	};

	
	
	//handle form submit
	const handleSubmit = async(e) => {
		//test
		const form = e.currentTarget;
		if (form.checkValidity() === false) {
			e.preventDefault();
			e.stopPropagation();
			
		}else{
			
		//test ends

		// prevents the submit button from refreshing the page
		e.preventDefault();
		setformData({
			...formData,
			skills1: [skills.skills1, skills.skills2],
			skills2: [skills.skills3, skills.skills4],
			skills3: [skills.skills5, skills.skills6],
			work1: {
				...formData.work1,
				details: [details.detail1, details.detail2],
			},
			work2: {
				...formData.work2,
				details: [details.detail3, details.detail4],
			},
		});

		console.log(formData);
		
		
		dispatch(dwnldResume(formData));
		}
		setValidated(true);
	};

	switch (step) {
		case 1:
			return (
				<>
					<Container fluid className="my-4 p-5 bg-light">
						<Row>
							<Col>
								<Form noValidate validated={validated} onSubmit={handleSubmit}>
									<StepOne formData={formData} handleChange={handleChange} />
									<Button onClick={nextStep}>Next</Button>
								</Form>
							</Col>
						</Row>
					</Container>
				</>
			);
		case 2:
			return (
				<>
					<Container fluid className="my-4 p-5 bg-light">
						<Row>
							<Col>
								<Form noValidate validated={validated} onSubmit={handleSubmit}>
									<StepTwo
										formData={formData}
										handleEducation1={handleEducation1}
										handleEducation2={handleEducation2}
									/>
									<Button onClick={prevStep}>Prev</Button>
									<Button onClick={nextStep}>Next</Button>
								</Form>
							</Col>
						</Row>
					</Container>
				</>
			);
		case 3:
			return (
				<>
					<Container fluid className="my-4 p-5 bg-light">
						<Row>
							<Col>
								<Form noValidate validated={validated} onSubmit={handleSubmit}>
									<StepThree skills={skills} handleSkills={handleSkills} />
									<Button onClick={prevStep}>Prev</Button>
									<Button onClick={nextStep}>Next</Button>
								</Form>
							</Col>
						</Row>
					</Container>
				</>
			);
		case 4:
			return (
				<>
					<Container fluid className="my-4 p-5 bg-light">
						<Row>
							<Col>
								<Form noValidate validated={validated} onSubmit={handleSubmit}>
									<StepFour
										formData={formData}
										handleWork1={handleWork1}
										handleWork2={handleWork2}
										details={details}
										handleDetails={handleDetails}
									/>
									<Button onClick={prevStep}>Prev</Button>
									<Button type="submit">Submit Data</Button>
								</Form>
							</Col>
						</Row>
					</Container>
				</>
			);
		default:
			return <></>;
	}
};
export default Final;
