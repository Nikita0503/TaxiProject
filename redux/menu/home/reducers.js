import {
    CHANGE_DISTANCE_FROM_ME,
    CHANGE_SELECTED_CARS,
    CHANGE_SHOW_DRIVER,
    CHANGE_SHOW_FILTER,
    CHANGE_SHOW_DRIVERS,
    CHANGE_SHOW_CHAT,
    CHANGE_DRIVER
} from './actions';

const defaultState = {
    distanceFromMe: 5,
    selectedCars: [true, true, true, true, true],
    showDriver: false,
    showFilter: false,
    showDrivers: false,
    showChat: false,
    drivers: [
        {
            id: 1,
            avatar: 'https://ajoyib.net/uploads/posts/11-2019/klava-koka-poslednij-procent.jpg',
            name: 'Clava Coca',
            distance: 567,
            rate: 3
        }
    ],
    driver: null,
}

export const mapReducer = (state = defaultState, action) => {
    
    switch (action.type){
        case CHANGE_DISTANCE_FROM_ME:
            return {
                ...state,
                distanceFromMe: action.payload
            }
        case CHANGE_SELECTED_CARS:
            return {
                ...state,
                selectedCars: action.payload
            }
        case CHANGE_SHOW_DRIVER:
            return {
                ...state,
                showDriver: action.payload
            }
        case CHANGE_SHOW_FILTER:
            return {
                ...state,
                showFilter: action.payload
            }
        case CHANGE_SHOW_DRIVERS:
            return {
                ...state,
                showDrivers: action.payload
            }
        case CHANGE_SHOW_CHAT:
            return {
                ...state,
                showChat: action.payload
            }
        case CHANGE_DRIVER:
            return {
                ...state,
                driver: action.payload
            }
    }
    return state;
}