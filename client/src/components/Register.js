import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { setAlert } from "../actions/alert";
import { register } from "../actions/auth";
import { useSelector, useDispatch } from "react-redux";

const Register = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");

	const dispatch = useDispatch();
	const user = useSelector((state) => state.auth);
	const handleRegisterSubmit = (e) => {
        console.log('OK')
		e.preventDefault();
		dispatch(register({ name, email, password:pass }));
	};
	return (
		<Form>
			<Form.Group className="mb-3" controlId="formBasicUserName">
				<Form.Label>User Name</Form.Label>
				<Form.Control
					type="text"
					placeholder="Enter youu name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Email address</Form.Label>
				<Form.Control
					type="email"
					placeholder="Enter email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<Form.Text className="text-muted">
					We'll never share your email with anyone else.
				</Form.Text>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Label>Password</Form.Label>
				<Form.Control
					type="password"
					placeholder="Password"
					value={pass}
					onChange={(e) => setPass(e.target.value)}
				/>
			</Form.Group>
			<Form.Group className="mb-3" controlId="formBasicCheckbox">
				<Form.Check type="checkbox" label="Check me out" />
			</Form.Group>
			<Button variant="primary" type="submit" onClick={handleRegisterSubmit}>
				Submit
			</Button>
		</Form>
	);
};

export default Register;
