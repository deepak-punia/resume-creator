import axios from "axios";
import { DWNLD_RESUME, ERROR_RESUME, SAVE_RESUME, LOAD_RESUME, UPDATE_RESUME } from "./types";
import { saveAs } from 'file-saver';
import setAuthToken from "../utils/setAuthToken";
import {setAlert} from './alert';

//Download resume - Visitor
export const dwnldResume = (data) => async (dispatch) => {
	
	{
		const body = JSON.stringify(data);
		console.log(body)
		

		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		try {
			const response = await axios.post(
				"http://localhost:5000/api/download",
				body,
				config
			);

			
			
		} catch (error) {
			console.log(error.response.data.errors);
			dispatch(setAlert("Error! Please try again.", "danger","final"));
		}
		try {
			const res = await axios.get('http://localhost:5000/api/download', { responseType: 'blob' });
			const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
			dispatch(setAlert("Your PDF file is downloaded successfully.", "success","final"));
             saveAs(pdfBlob, 'resume.pdf')
		} catch (error) {
			dispatch(setAlert("Error! Please try again.", "danger","final"));
		}
}};

//Download resume - User
export const dwnldResumeUser = (data) => async (dispatch) => {
	
	{
		const body = JSON.stringify(data);
		console.log(body)
		

		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		try {
			const response = await axios.post(
				"http://localhost:5000/api/download/user",
				body,
				config
			);

			
			
		} catch (error) {
			dispatch(setAlert("Error! Please try again.", "danger","final"));
			dispatch(setAlert("Error! Please try again.", "danger","dashboard"));
			
		}
		try {
			const res = await axios.get('http://localhost:5000/api/download/', { responseType: 'blob' });
			const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
			dispatch(setAlert("Your PDF file is downloaded successfully.", "success","final"));
			dispatch(setAlert("Your PDF file is downloaded successfully.", "success","dashboard"));
             saveAs(pdfBlob, 'resume.pdf')
		} catch (error) {
			dispatch(setAlert("Error! Please try again.", "danger","final"));
			dispatch(setAlert("Error! Please try again.", "danger","dashboard"));
		}
}};

//Save resume - User
export const saveResume = (data) => async (dispatch) => {
	
	{
		const body = JSON.stringify(data);
		console.log(body)
		

		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		try {
			const response = await axios.post(
				"http://localhost:5000/api/download/save",
				body,
				config
			);
			console.log(response.data)
			dispatch({
				type: SAVE_RESUME,
				payload: response.data
			})
			
			
		} catch (error) {
			console.log(error.response.data.errors);
			
		}
		
		
}};

//Get User Resume Data from database
export const loadResumeData = () => async (dispatch) => {
	if (localStorage.token) {
		setAuthToken(localStorage.token);
	}
	try {
		const response = await axios.get("http://localhost:5000/api/myresume");
		dispatch(setAlert("Data is loaded.", "success","final"));
		dispatch({
			type: UPDATE_RESUME,
			payload: response.data,
		});
	} catch (error) {
		dispatch(setAlert("Error! Please try again.", "danger","final"));
		
	}
};

//Update User Resume Data from database
export const updateResumeData = (data) => async (dispatch) => {
	const body = JSON.stringify(data);
		
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
	try {
		const response = await axios.post("http://localhost:5000/api/myresume",body,config);
		dispatch(setAlert("Data is Updated", "success","final"));
		dispatch({
		type: UPDATE_RESUME,
		payload: data,
		});
	} catch (error) {
		dispatch(setAlert("Error! Please try again.", "danger","final"));
	}
};
