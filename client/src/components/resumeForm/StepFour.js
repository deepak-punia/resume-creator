import React from "react";
import { Form, Row, Col } from "react-bootstrap";

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
			<h2> #1 Work History</h2>
			<hr />
			<Form.Group className="mb-3">
				<Form.Label>Year</Form.Label>
				<Form.Control
					type="text"
					name="time"
					placeholder="2020-2021"
					value={formData.work1.time}
					onChange={handleWork1}
					required
				/>
				<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
			</Form.Group>

			<Form.Group className="mb-3">
				<Form.Label>Company</Form.Label>
				<Form.Control
					type="text"
					name="company"
					placeholder="Company"
					value={formData.work1.company}
					onChange={handleWork1}
					required
				/>
				<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
			</Form.Group>

			<Form.Group className="mb-3">
				<Form.Label>Position</Form.Label>
				<Form.Control
					type="text"
					name="position"
					placeholder="Position"
					value={formData.work1.position}
					onChange={handleWork1}
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
					value={formData.work1.location}
					onChange={handleWork1}
					required
				/>
				<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
			</Form.Group>
			<Row className="g-2">
				<Col md>
					<Form.Group className="mb-3">
						<Form.Label>Work Responsibility #1</Form.Label>
						<Form.Control
							type="text"
							name="detail1"
							placeholder="Responsibility/details"
							value={details.detail1}
							onChange={handleDetails}
							required
						/>
						<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
					</Form.Group>
				</Col>
				<Col md>
					<Form.Group className="mb-3">
						<Form.Label>Work Responsibility #2</Form.Label>
						<Form.Control
							type="text"
							name="detail2"
							placeholder="Responsibility/details"
							value={details.detail2}
							onChange={handleDetails}
							required
						/>
						<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
					</Form.Group>
				</Col>
			</Row>

			{/* WORK2 */}
			<h2> #2 Work History</h2>
			<hr />
			<Form.Group className="mb-3">
				<Form.Label>Year</Form.Label>
				<Form.Control
					type="text"
					name="time"
					placeholder="2020-2021"
					value={formData.work2.time}
					onChange={handleWork2}
					required
				/>
				<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
			</Form.Group>

			<Form.Group className="mb-3">
				<Form.Label>Company</Form.Label>
				<Form.Control
					type="text"
					name="company"
					placeholder="Company"
					value={formData.work2.company}
					onChange={handleWork2}
					required
				/>
				<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
			</Form.Group>

			<Form.Group className="mb-3">
				<Form.Label>Position</Form.Label>
				<Form.Control
					type="text"
					name="position"
					placeholder="Position"
					value={formData.work2.position}
					onChange={handleWork2}
					required
				/>
				<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
			</Form.Group>

			<Form.Group className="mb-3">
				<Form.Label>Location</Form.Label>
				<Form.Control
					type="text"
					name="location"
					placeholder="123 steert, Ontario, CA"
					value={formData.work2.location}
					onChange={handleWork2}
					required
				/>
				<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
			</Form.Group>

			<Row className="g-2">
				<Col md>
					<Form.Group className="mb-3">
						<Form.Label>Work Responsibility #1</Form.Label>
						<Form.Control
							type="text"
							name="detail3"
							placeholder="Responsibilty/details"
							value={details.detail3}
							onChange={handleDetails}
							required
						/>
						<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
					</Form.Group>
				</Col>
				<Col md>
					<Form.Group className="mb-3">
						<Form.Label>Work Responsibility #2</Form.Label>
						<Form.Control
							type="text"
							name="detail4"
							placeholder="Responsibilty/details"
							value={details.detail4}
							onChange={handleDetails}
							required
						/>
						<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
					</Form.Group>
				</Col>
			</Row>
		</>
	);
};

export default StepFour;
