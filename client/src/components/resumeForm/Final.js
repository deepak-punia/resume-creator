import { Form, Button, Container, Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import Alerts from '../Alerts';
import {setAlert} from '../../actions/alert';
import {
	dwnldResume,
	dwnldResumeUser,
	saveResume,
	updateResumeData,
} from "../../actions/resume";
import { useSelector, useDispatch } from "react-redux";

const Final = ({refresh}={refresh: true}) => {
	const [immediateStateChange, setimmediateStateChange] = useState(false);
	const user = useSelector((state) => state.auth);
	const userData = useSelector((state) => state.user);
	const resumeData = useSelector((state) => state.resume);

	const dispatch = useDispatch();
	//testing validation
	const [validated, setValidated] = useState(false);

	//test code ends
	const [details, setdetails] = useState({
		detail1: "",
		detail2: "",
		detail3: "",
		detail4: "",
	});

	const [skills, setskills] = useState({
		skills1: "",
		skills2: "",
		skills3: "",
		skills4: "",
		skills5: "",
		skills6: "",
	});

	const [formData, setformData] = useState({
		name: "",
		address: "",
		phone: "",
		email: "",
		skills1: [],
		skills2: [],
		skills3: [],
		objective: "",
		education1: {
			time: "",
			university: "",
			course: "",
			location: "",
			achievement: "",
		},
		education2: {
			time: "",
			university: "",
			course: "",
			location: "",
			achievement: "",
		},
		work1: {
			time: "",
			company: "",
			position: "",
			location: "",
			details: [],
		},
		work2: {
			time: "",
			company: "",
			position: "",
			location: "",
			details: [],
		},
	});

	useEffect(() => {

		if (resumeData.saved) {
			setformData(resumeData.data);

			setskills({
				skills1: resumeData.data.skills1[0],
				skills2: resumeData.data.skills1[1],
				skills3: resumeData.data.skills2[0],
				skills4: resumeData.data.skills2[1],
				skills5: resumeData.data.skills3[0],
				skills6: resumeData.data.skills3[1],
			});

			setdetails({
				detail1: resumeData.data.work1.details[0],
				detail2: resumeData.data.work1.details[1],
				detail3: resumeData.data.work2.details[0],
				detail4: resumeData.data.work2.details[1],
			});
		}
	}, [refresh]);

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
		setimmediateStateChange(false);
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

	//handle update button
	const handleUpdate = (e) => {
		e.preventDefault();
		dispatch(setAlert("Updating Data...", "info","final"));
		dispatch(updateResumeData(formData));
	};
	//handle form submit
	const handleSubmit = async (e) => {
		//test
		const form = e.currentTarget;
		if (form.checkValidity() === false) {
			e.preventDefault();
			dispatch(setAlert("Please input all required fields.", "danger","final"));
			e.stopPropagation();
		} else {
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

			if (user.isAuthenticated) {
				dispatch(dwnldResumeUser(formData));
				dispatch(setAlert("Downloading...", "info","final"));
			} else {
				dispatch(dwnldResume(formData));
				dispatch(setAlert("Downloading...", "info","final"));
			}
		}
		setValidated(true);
	};

	//save User resume data to database
	const handleSaveClick = (e) => {
		const form = e.currentTarget;
		if (form.checkValidity() === false) {
			e.preventDefault();
			e.stopPropagation();
		} else {
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

			dispatch(setAlert("Saving data...", "info","final"));
			dispatch(saveResume(formData));
			
		}
		setValidated(true);
	};

	const handleFinish = (e) => {
		e.preventDefault();
		const form = e.currentTarget;
		if (form.checkValidity() === false) {
			e.preventDefault();
			e.stopPropagation();
		} else {
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

			setimmediateStateChange(true);
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
						<Row>
							<Alerts componentName={"final"}/>
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
						<Row>
							<Alerts componentName={"final"}/>
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
						<Row>
							<Alerts componentName={"final"}/>
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
									<Button onClick={handleFinish}>Finish</Button>
									{immediateStateChange ? (
										<>
											<Button type="submit">Download PDF</Button>
											{user.isAuthenticated && !resumeData.saved ? (
												<Button onClick={handleSaveClick}>Save Data</Button>
											) : (
												<></>
											)}
											{user.isAuthenticated && resumeData.saved ? (
												<Button onClick={handleUpdate}>Update</Button>
											) : (
												<></>
											)}
										</>
									) : (
										<></>
									)}
								</Form>
							</Col>
						</Row>
						<Row>
							<Alerts componentName={"final"}/>
						</Row>
					</Container>
				</>
			);
		default:
			return <></>;
	}
};
export default Final;
