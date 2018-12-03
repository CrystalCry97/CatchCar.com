// Car Reducer
const carsReducerDefaultState = [];

const carsReducer = (state= carsReducerDefaultState, action)=>{
    switch(action.type){
        case 'ADD_CAR':
            return [
                ...state,
                action.car
            ];
        case 'REMOVE_CAR':
            return state.filter(({id}) => id !== action.id);
        case 'EDIT_CAR':
            return state.map((car)=> {
                if(car.id === action.id){
                    return {
                        ...car,
                        ...action.updates //add updates
                    };
                }else{
                    return car;
                };
            }); 
        case 'SET_CARS':
            return action.cars;
        default:
            return state;
    }
};

export default carsReducer;