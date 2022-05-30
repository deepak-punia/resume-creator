import { Form, Row, Col } from "react-bootstrap";

const StepThree = ({ skills, handleSkills }) => {
	return (
		<>
			<h2> Skills </h2>
			<hr />
			<Row className="g-2">
				<Col md>
					<Form.Group className="mb-3">
						<Form.Label>Skill #1</Form.Label>
						<Form.Control
							type="text"
							name="skills1"
							placeholder="Skill #1"
							value={skills.skills1}
							onChange={handleSkills}
							required
						/>
						<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
					</Form.Group>
				</Col>
				<Col md>
					<Form.Group className="mb-3">
						<Form.Label>Skill #2</Form.Label>
						<Form.Control
							type="text"
							name="skills2"
							placeholder="Skill #2"
							value={skills.skills2}
							onChange={handleSkills}
							required
						/>
						<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
					</Form.Group>
				</Col>
			</Row>
			<Row className="g-2">
				<Col md>
					<Form.Group className="mb-3">
						<Form.Label>Skill #3</Form.Label>
						<Form.Control
							type="text"
							name="skills3"
							placeholder="Skill #3"
							value={skills.skills3}
							onChange={handleSkills}
							required
						/>
						<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
					</Form.Group>
				</Col>
				<Col md>
					<Form.Group className="mb-3">
						<Form.Label>Skill #4</Form.Label>
						<Form.Control
							type="text"
							name="skills4"
							placeholder="Skill #4"
							value={skills.skills4}
							onChange={handleSkills}
							required
						/>
						<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
					</Form.Group>
				</Col>
			</Row>
			<Row className="g-2">
				<Col md>
					<Form.Group className="mb-3">
						<Form.Label>Skill #5</Form.Label>
						<Form.Control
							type="text"
							name="skills5"
							placeholder="Skill #5"
							value={skills.skills5}
							onChange={handleSkills}
							required
						/>
						<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
					</Form.Group>
				</Col>
				<Col md>
					<Form.Group className="mb-3">
						<Form.Label>Skill #6</Form.Label>
						<Form.Control
							type="text"
							name="skills6"
							placeholder="Skill #6"
							value={skills.skills6}
							onChange={handleSkills}
							required
						/>
						<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
					</Form.Group>
				</Col>
			</Row>
		</>
	);
};

export default StepThree;
