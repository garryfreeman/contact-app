const initialState = {
	loading: true,
	error: false,
	language: 'en',
	content: null,
	currentPage: '/',
	darkMode: false,
	portfolioFilterValue: 'all'
};


const reducer = (state = initialState, action) => {

   switch(action.type) {
		case 'CONTENT_REQUESTED':
			return {
				...state,
				loading: true,
				error: false
			}
		
		case 'CONTENT_LOADED':
			return {
				...state,
				...action.payload,
				loading: false,
				error: false
			}

		case 'CONTENT_ERROR':
			return {
				...state,
				content: null,
				loading: false,
				error: true
			};
		
		case 'PAGE_LOADED':
			return {
				...state,
				currentPage: action.payload
			};

		case 'SET_LIGHT_MODE':
			return {
				...state,
				darkMode: false
			}
		
		case 'SET_DARK_MODE':
			return {
				...state,
				darkMode: true
			}
		
		case 'FILTER_VALUE_CHANGED':
			return {
				...state,
				portfolioFilterValue: action.payload
			}

      default: 
         return state;
   }
};

export default reducer;