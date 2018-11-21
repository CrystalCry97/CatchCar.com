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

export default getVisibleCars;