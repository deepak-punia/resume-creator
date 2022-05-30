import { Form } from "react-bootstrap";

const StepTwo = ({ formData, handleEducation1, handleEducation2 }) => {
	return (
		<>
			<h2>#1 Education Details</h2>
			<hr />
			<Form.Group className="mb-3">
				<Form.Label>Year</Form.Label>
				<Form.Control
					type="text"
					name="time"
					placeholder="2020-2021"
					value={formData.education1.time}
					onChange={handleEducation1}
					required
				/>
				<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
			</Form.Group>

			<Form.Group className="mb-3">
				<Form.Label>University</Form.Label>
				<Form.Control
					type="text"
					name="university"
					placeholder="University"
					value={formData.education1.university}
					onChange={handleEducation1}
					required
				/>
				<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
			</Form.Group>

			<Form.Group className="mb-3">
				<Form.Label>Program</Form.Label>
				<Form.Control
					type="text"
					name="course"
					placeholder="Program Name"
					value={formData.education1.course}
					onChange={handleEducation1}
					required
				/>
				<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
			</Form.Group>

			<Form.Group className="mb-3">
				<Form.Label>Location</Form.Label>
				<Form.Control
					type="text"
					name="location"
					placeholder="123 street, Ontario, CA"
					value={formData.education1.location}
					onChange={handleEducation1}
					required
				/>
				<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
			</Form.Group>

			<Form.Group className="mb-3">
				<Form.Label>Achievement</Form.Label>
				<Form.Control
					type="text"
					name="achievement"
					placeholder="Achievement/details"
					value={formData.education1.achievement}
					onChange={handleEducation1}
					required
				/>
				<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
			</Form.Group>

			<h2>#2 Education Details</h2>
			<hr />
			<Form.Group className="mb-3">
				<Form.Label>Year</Form.Label>
				<Form.Control
					type="text"
					name="time"
					placeholder="2020-2021"
					value={formData.education2.time}
					onChange={handleEducation2}
					required
				/>
				<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
			</Form.Group>

			<Form.Group className="mb-3">
				<Form.Label>University</Form.Label>
				<Form.Control
					type="text"
					name="university"
					placeholder="University"
					value={formData.education2.university}
					onChange={handleEducation2}
					required
				/>
				<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
			</Form.Group>

			<Form.Group className="mb-3">
				<Form.Label>Program</Form.Label>
				<Form.Control
					type="text"
					name="course"
					placeholder="Program Name"
					value={formData.education2.course}
					onChange={handleEducation2}
					required
				/>
				<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
			</Form.Group>

			<Form.Group className="mb-3">
				<Form.Label>Location</Form.Label>
				<Form.Control
					type="text"
					name="location"
					placeholder="123 street, Ontario, CA"
					value={formData.education2.location}
					onChange={handleEducation2}
					required
				/>
				<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
			</Form.Group>

			<Form.Group className="mb-3">
				<Form.Label>Achievement</Form.Label>
				<Form.Control
					type="text"
					name="achievement"
					placeholder="Achievement/details"
					value={formData.education2.achievement}
					onChange={handleEducation2}
					required
				/>
				<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
			</Form.Group>
		</>
	);
};

export default StepTwo;
