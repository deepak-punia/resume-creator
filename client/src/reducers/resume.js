import { dwnldResume } from "../actions/resume";
import { DWNLD_RESUME, ERROR_RESUME } from "../actions/types";


export default function (state = {}, action) {
	switch (action.type) {
		
		case DWNLD_RESUME:
			
			return {
				...state,
				file: action.payload
			};
		
		case ERROR_RESUME:
			
			return {
				...state,
				file: undefined
			};
		
		default:
			return state;
	}
}
