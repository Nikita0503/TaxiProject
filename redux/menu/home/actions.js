export const CHANGE_DISTANCE_FROM_ME = 'CHANGE_DISTANCE_FROM_ME';
export const CHANGE_SELECTED_CARS = 'CHANGE_SELECTED_CARS';
export const CHANGE_SHOW_DRIVER = 'CHANGE_SHOW_DRIVER';
export const CHANGE_SHOW_FILTER = 'CHANGE_SHOW_FILTER';
export const CHANGE_SHOW_DRIVERS = 'CHANGE_SHOW_DRIVERS';
export const CHANGE_SHOW_CHAT = 'CHANGE_SHOW_CHAT';
export const CHANGE_DRIVER = 'CHANGE_DRIVER';

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
})