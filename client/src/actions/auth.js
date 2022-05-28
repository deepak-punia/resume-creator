import axios from "axios";
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGOUT,
	LOGIN
} from "./types";
import { setAlert } from "./alert";
import setAuthToken from "../utils/setAuthToken";

//Logout user
export const logout = () => (dispatch) => {
	dispatch({
		type: LOGOUT,
	});
};

//Load User
export const loadUser = () => async (dispatch) => {
	if (localStorage.token) {
		setAuthToken(localStorage.token);
	}
	try {
		const response = await axios.get("http://localhost:5000/api/login");

		dispatch({
			type: USER_LOADED,
			payload: response.data,
		});
	} catch (error) {
		console.log(error);
		dispatch({
			type: AUTH_ERROR,
		});
	}
};

//Register User
export const register =
	({ name, email, password }) =>
	async (dispatch) => {
		const body = JSON.stringify({ name, email, password });

		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		try {
			const response = await axios.post(
				"http://localhost:5000/api/users",
				body,
				config
			);

			dispatch({
				type: REGISTER_SUCCESS,
				payload: response.data,
			});
		} catch (error) {
			console.log(error);
			dispatch(setAlert("Register Failed", "danger"));
			dispatch({
				type: REGISTER_FAIL,
			});
		}
	};

//Login User
export const login =
	({ email, password }) =>
	async (dispatch) => {
		const body = JSON.stringify({  email, password });

		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		try {
			const response = await axios.post(
				"http://localhost:5000/api/login",
				body,
				config
			);

			dispatch({
				type: LOGIN,
				payload: response.data,
			});
		} catch (error) {
			console.log(error.response.data.errors);
			error.response.data.errors.forEach(item=>{
				dispatch(setAlert(item.msg, "danger"));
			})
			
			dispatch({
				type: AUTH_ERROR,
			});
		}
	};
