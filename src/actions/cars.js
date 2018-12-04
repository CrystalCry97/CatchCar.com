import uuid from 'uuid'; //random id generator
import database from '../firebase/firebase'; 

//ADD_CAR
export const addCar =(car) =>({
    type:'ADD_CAR',
    car
});

export const startAddCar= (carData={}) => {
    return (dispatch,getState) => {
        const{
            carBrand= '',
            carSeats= 0,
            airConditioning= '',
            gearBox= '',
            location='',
            pricePerDay=0,
            availableOn= 0,
            rating=0
        }=carData;
        const car= {
            carBrand,
            carSeats,
            airConditioning,
            gearBox,
            location,
            pricePerDay,
            availableOn,
            rating
        }

        return database.ref(`Company/CompanyABC/Cars`).push(car).then((ref)=> {
            dispatch(addCar({
                id: ref.key,
                ...car
            }));
        });
    }
}

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

// SET_EXPENSES
export const setCars = (cars) => ({
    type: 'SET_CARS',
    cars
});


export const startSetCars = () => {
    return (dispatch,getState) => {
        return database.ref(`Company/CompanyABC/Cars`)
            .once('value')
            .then((snapshot) => {
                const cars=[];

                snapshot.forEach((childSnapshot)=> {
                    cars.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    });
                });

                dispatch(setCars(cars));
            });

    };
};