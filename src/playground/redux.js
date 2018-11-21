import { createStore, combineReducers } from 'redux';
import uuid from 'uuid'; //random id generator

//ADD_CAR
const addCar =({
    carBrand= '',
    carSeats= 0,
    airConditioning= '',
    gearBox= '',
    location='',
    pricePerDay=0,
    availableOn= 0,
    rating=0
}={}) =>({
    type:'ADD_CAR',
    car:{
        id: uuid(),
        carBrand,
        carSeats,
        airConditioning,
        gearBox,
        location,
        pricePerDay,
        availableOn,
        rating
    }
});

//REMOVE_CAR
const removeCar= ({id}={}) => ({
    type: 'REMOVE_CAR',
    id
});

//EDIT_CAR
const editCar = (id, updates) => ({
    type: 'EDIT_CAR',
    id,
    updates
});

//SET_PICKUP_LOCATION_FILTER
const setPickupLocationFilter= (pickupLocation='') => ({
    type: 'SET_PICKUP_LOCATION_FILTER',
    pickupLocation
});

//SET_PICKUP_DATE
const setPickupDate = (pickupDate) => ({
    type: 'SET_PICKUP_DATE',
    pickupDate
});

//SET_RETURN_DATE
const setReturnDate = (returnDate) => ({
    type: 'SET_RETURN_DATE',
    returnDate
});

//SORT_BY_PRICE
const sortByPrice=()=>({
    type: 'SORT_BY_PRICE'
});

//SORT_BY_PRICE
const sortByRating=()=>({
    type: 'SORT_BY_RATING'
});

// Car Reducer
const carReducerDefaultState = [];

const carsReducer = (state= carReducerDefaultState, action)=>{
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
        default:
            return state;
    }
};

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

const getVisibleCars = (cars, {pickupLocation, pickupDate, returnDate, sortBy}) => {
        return cars.filter((car) => {
            const pickupDateMatch = typeof pickupDate !== 'number' || car.availableOn >= pickupDate;
            const returnDateMatch = typeof returnDate !== 'number' || car.availableOn <= returnDate;
            const locationMatch = car.location.toLowerCase().includes(pickupLocation.toLowerCase());
            //console.log(locationMatch);

            return pickupDateMatch && returnDateMatch && locationMatch;
        }).sort((a,b) => {
            if(sortBy === 'price'){
                return a.pricePerDay > b.pricePerDay ? 1 : -1; // sorting based on price (low to high )
            }
            else if(sortBy === 'rating'){
                return a.rating < b.rating ? 1 : -1; // sorting based on rating (high to low )
            }
        });
    };

const store= createStore(
    combineReducers({
        cars: carsReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleCars = getVisibleCars(state.cars, state.filters);
    console.log(visibleCars);
});

const carOne= store.dispatch(addCar({
    carBrand:'Proton Saga', 
    carSeats:5,
    airConditioning:'cool',
    gearBox:'manual',
    location:'Shah Alam',
    pricePerDay: 11000,  //RM110.00
    availableOn: 131118,
    rating: 3.5
 }));
 const carTwo= store.dispatch(addCar({
    carBrand:'Toyota Innova', 
    carSeats:7,
    airConditioning:'super cool',
    gearBox:'auto',
    location:'KLIA',
    pricePerDay: 22000,  //RM220.00
    availableOn: 151118,
    rating: 4.7
 }));
 const carThree= store.dispatch(addCar({
    carBrand:'Proton Wira', 
    carSeats:5,
    airConditioning:'cool',
    gearBox:'manual',
    location:'Shah Alam',
    pricePerDay: 10000,  //RM110.00
    availableOn: 141118,
    rating: 4.1
 }));


store.dispatch(editCar(carTwo.car.id, {location:'Shah Alam'}));


store.dispatch(sortByPrice());

store.dispatch(setPickupLocationFilter('Shah '));


store.dispatch(setPickupDate(141118));
store.dispatch(setReturnDate(141118));
