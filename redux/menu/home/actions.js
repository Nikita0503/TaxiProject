export const CHANGE_DISTANCE_FROM_ME = 'CHANGE_DISTANCE_FROM_ME';
export const CHANGE_SELECTED_CARS = 'CHANGE_SELECTED_CARS';
export const CHANGE_SHOW_DRIVER = 'CHANGE_SHOW_DRIVER';
export const CHANGE_SHOW_FILTER = 'CHANGE_SHOW_FILTER';
export const CHANGE_SHOW_DRIVERS = 'CHANGE_SHOW_DRIVERS';
export const CHANGE_SHOW_CHAT = 'CHANGE_SHOW_CHAT';
export const CHANGE_DRIVER = 'CHANGE_DRIVER';
export const CHANGE_LATITUDE = 'CHANGE_LATITUDE';
export const CHANGE_LONGITUDE = 'CHANGE_LONGITUDE';
export const CHANGE_SHOW_CONTRACT = 'CHANGE_SHOW_CONTRACT';
export const CHANGE_MY_LATITUDE = 'CHANGE_MY_LATITUDE';
export const CHANGE_MY_LONGITUDE = 'CHANGE_MY_LONGITUDE';
export const CHANGE_CURRENT_DRIVER = 'CHANGE_CURRENT_DRIVER';
export const CHANGE_MIN_RATING = 'CHANGE_MIN_RATING';
export const CHANGE_PRICE_FROM = 'CHANGE_PRICE_FROM';
export const CHANGE_PRICE_TO = 'CHANGE_PRICE_TO';

export const setDistanceFromMe = distanceFromMe => ({
    type: CHANGE_DISTANCE_FROM_ME,
    payload: distanceFromMe
});

export const setSelectedCars = selectedCars => ({
    type: CHANGE_SELECTED_CARS,
    payload: selectedCars
});

export const setShowDriver = showDriver => ({
    type: CHANGE_SHOW_DRIVER,
    payload: showDriver
});

export const setShowFilter = showFilter => ({
    type: CHANGE_SHOW_FILTER,
    payload: showFilter
});

export const setShowDrivers = showDrivers => ({
    type: CHANGE_SHOW_DRIVERS,
    payload: showDrivers
});

export const setShowChat = showChat => ({
    type: CHANGE_SHOW_CHAT,
    payload: showChat
});

export const setDriver = driver => ({
    type: CHANGE_DRIVER,
    payload: driver
});

export const setLatitude = latitude => ({
    type: CHANGE_LATITUDE,
    payload: latitude
});

export const setLongitude = longitude => ({
    type: CHANGE_LONGITUDE,
    payload: longitude
});

export const setShowContract = showContract => ({
    type: CHANGE_SHOW_CONTRACT,
    payload: showContract
})

export const setMyLatitude = latitude => ({
    type: CHANGE_MY_LATITUDE,
    payload: latitude
});

export const setMyLongitude = longitude => ({
    type: CHANGE_MY_LONGITUDE,
    payload: longitude
});

export const setCurrentDriver = currentDriver => ({
    type: CHANGE_CURRENT_DRIVER,
    payload: currentDriver
});

export const setMinRating = minRating => ({
    type: CHANGE_MIN_RATING,
    payload: minRating
});

export const setPriceFrom = priceFrom => ({
    type: CHANGE_PRICE_FROM,
    payload: priceFrom
});

export const setPriceTo = priceTo => ({
    type: CHANGE_PRICE_TO,
    payload: priceTo
});