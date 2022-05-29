
import { SAVE_RESUME, ERROR_RESUME , LOAD_RESUME, UPDATE_RESUME} from "../actions/types";


export default function (state = {saved: false}, action) {
	switch (action.type) {
		case LOAD_RESUME:
		case UPDATE_RESUME:
		case SAVE_RESUME:
			
			return {
				...state,
				data: action.payload,
				saved: true,
			};
		
		case ERROR_RESUME:
			
			return {
				...state,
				data: undefined,
				saved: false,
			};
		
		default:
			return state;
	}
}
