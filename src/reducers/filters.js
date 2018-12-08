//Filters Reducer
const filtersReducerDefaultState = {
    pickupLocation: '',
    pickupDate: undefined,
    returnDate: undefined,
    sortBy: 'rating'
};

const filtersReducer= (state= filtersReducerDefaultState,action) =>{
    switch(action.type){
        case 'SET_PICKUP_LOCATION_FILTER':
            console.log("set location");
            return {
                ...state,
                pickupLocation: action.pickupLocation
            };
        case 'SET_PICKUP_DATE':
            return {
                ...state,
                pickupDate: action.pickupDate
            };
        case 'SET_RETURN_DATE':
            return {
                ...state,
               returnDate: action.returnDate
            };
        case 'SORT_BY_PRICE':
            return {
                ...state,
                sortBy: 'price'
            };
        case 'SORT_BY_RATING':
            return {
                ...state,
                sortBy: 'rating'
            };
        default:
            return state;
    }
};

export default filtersReducer;