import axios from "axios";
import { DWNLD_RESUME, ERROR_RESUME } from "./types";
import download from "downloadjs";
import { saveAs } from 'file-saver';

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

			console.log(response);
			
		} catch (error) {
			console.log(error.response.data.errors);
			
		}
		try {
			const res = await axios.get('http://localhost:5000/api/download', { responseType: 'blob' });
			const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

             saveAs(pdfBlob, 'resume.pdf')
		} catch (error) {
			
		}
}}
;
