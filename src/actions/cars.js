import uuid from 'uuid'; //random id generator

//ADD_CAR
export const addCar =({
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
export const removeCar= ({id}={}) => ({
    type: 'REMOVE_CAR',
    id
});

//EDIT_CAR
export const editCar = (id, updates) => ({
    type: 'EDIT_CAR',
    id,
    updates
});