import React from "react";
import { Form } from "react-bootstrap";

const StepFour = ({
	formData,
	handleWork1,
	handleWork2,
	details,
	handleDetails,
}) => {
	return (
		<>
			{/* WORK1 */}

			<Form.Group className="mb-3">
				<Form.Label>Phone</Form.Label>
				<Form.Control
					type="text"
					name="time"
					placeholder="work1 time"
					value={formData.work1.time}
					onChange={handleWork1}
					required
				/>
				<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
			</Form.Group>

			<Form.Group className="mb-3">
				<Form.Label>Phone</Form.Label>
				<Form.Control
					type="text"
					name="company"
					placeholder="work1 company"
					value={formData.work1.company}
					onChange={handleWork1}
					required
				/>
				<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
			</Form.Group>

			<Form.Group className="mb-3">
				<Form.Label>Phone</Form.Label>
				<Form.Control
					type="text"
					name="position"
					placeholder="work1 position"
					value={formData.work1.position}
					onChange={handleWork1}
					required
				/>
				<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
			</Form.Group>

			<Form.Group className="mb-3">
				<Form.Label>Phone</Form.Label>
				<Form.Control
					type="text"
					name="location"
					placeholder="work1 location"
					value={formData.work1.location}
					onChange={handleWork1}
					required
				/>
				<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
			</Form.Group>

			{/* WORK2 */}

			<Form.Group className="mb-3">
				<Form.Label>Phone</Form.Label>
				<Form.Control
					type="text"
					name="time"
					placeholder="work2 time"
					value={formData.work2.time}
					onChange={handleWork2}
					required
				/>
				<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
			</Form.Group>

			<Form.Group className="mb-3">
				<Form.Label>Phone</Form.Label>
				<Form.Control
					type="text"
					name="company"
					placeholder="work2 company"
					value={formData.work2.company}
					onChange={handleWork2}
					required
				/>
				<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
			</Form.Group>

			<Form.Group className="mb-3">
				<Form.Label>Phone</Form.Label>
				<Form.Control
					type="text"
					name="position"
					placeholder="work2 position"
					value={formData.work2.position}
					onChange={handleWork2}
					required
				/>
				<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
			</Form.Group>

			<Form.Group className="mb-3">
				<Form.Label>Phone</Form.Label>
				<Form.Control
					type="text"
					name="location"
					placeholder="work2 location"
					value={formData.work2.location}
					onChange={handleWork2}
					required
				/>
				<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
			</Form.Group>

			<Form.Group className="mb-3">
				<Form.Label>Phone</Form.Label>
				<Form.Control
					type="text"
					name="detail1"
					placeholder="work1 details"
					value={details.detail1}
					onChange={handleDetails}
					required
				/>
				<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
			</Form.Group>

			<Form.Group className="mb-3">
				<Form.Label>Phone</Form.Label>
				<Form.Control
					type="text"
					name="detail2"
					placeholder="work1 details"
					value={details.detail2}
					onChange={handleDetails}
					required
				/>
				<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
			</Form.Group>

			<Form.Group className="mb-3">
				<Form.Label>Phone</Form.Label>
				<Form.Control
					type="text"
					name="detail3"
					placeholder="work2 details"
					value={details.detail3}
					onChange={handleDetails}
					required
				/>
				<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
			</Form.Group>

			<Form.Group className="mb-3">
				<Form.Label>Phone</Form.Label>
				<Form.Control
					type="text"
					name="detail4"
					placeholder="work2 details"
					value={details.detail4}
					onChange={handleDetails}
					required
				/>
				<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
			</Form.Group>
		</>
	);
};

export default StepFour;
