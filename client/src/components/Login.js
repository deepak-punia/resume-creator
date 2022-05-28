import { Form, Button , Container, Row, Col} from "react-bootstrap";
import { useState } from "react";
import { setAlert } from "../actions/alert";
import { login } from "../actions/auth";
import { useSelector, useDispatch } from "react-redux";

const Login = () => {
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");

	const dispatch = useDispatch();
	const user = useSelector((state) => state.auth);
	const handleRegisterSubmit = (e) => {
        console.log('OK')
		e.preventDefault();
		dispatch(login({ email, password:pass }));
	};
	return (
		<Container className="p-5 h-100 bg-light">
			<Row>
				<Col>
		<Form>
			<h2>Login</h2>

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
		</Col>
			</Row>
		</Container>
	);
};

export default Login;
