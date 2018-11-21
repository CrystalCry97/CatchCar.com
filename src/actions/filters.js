//SET_PICKUP_LOCATION_FILTER
export const setPickupLocationFilter= (pickupLocation='') => ({
    type: 'SET_PICKUP_LOCATION_FILTER',
    pickupLocation
});

//SET_PICKUP_DATE
export const setPickupDate = (pickupDate) => ({
    type: 'SET_PICKUP_DATE',
    pickupDate
});

//SET_RETURN_DATE
export const setReturnDate = (returnDate) => ({
    type: 'SET_RETURN_DATE',
    returnDate
});

//SORT_BY_PRICE
export const sortByPrice=()=>({
    type: 'SORT_BY_PRICE'
});

//SORT_BY_RATING
export const sortByRating=()=>({
    type: 'SORT_BY_RATING'
});
