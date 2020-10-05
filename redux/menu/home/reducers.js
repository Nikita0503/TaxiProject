import {
    CHANGE_DISTANCE_FROM_ME,
    CHANGE_SELECTED_CARS,
    CHANGE_SHOW_DRIVER,
    CHANGE_SHOW_FILTER,
    CHANGE_SHOW_DRIVERS,
    CHANGE_SHOW_CHAT,
    CHANGE_DRIVER,
    CHANGE_LATITUDE,
    CHANGE_LONGITUDE,
    CHANGE_SHOW_CONTRACT,
    CHANGE_SHOW_RATE,
    CHANGE_MY_LATITUDE,
    CHANGE_MY_LONGITUDE,
    CHANGE_CURRENT_DRIVER,
    CHANGE_MIN_RATING,
    CHANGE_PRICE_FROM,
    CHANGE_PRICE_TO
} from './actions';

const defaultState = {
    distanceFromMe: 5,
    selectedCars: [true, true, true, true, true],
    minRating: 4,
    priceFrom: null,
    priceTo: null,
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
            rate: 5,
            car: 'Audi Q8',
            carAvatar: 'https://www.autostat.ru/application/includes/blocks/big_photo/images/cache/000/058/006/cd4db793-670-0.jpg',
            rating: 3.5
        },
        {
            id: 2,
            avatar: 'https://cdnimg.rg.ru/i/gallery/3a6ff2bf/3_c66971e5.jpg',
            name: 'Margot Robbie',
            distance: 231,
            rate: 7,
            car: 'BMW x7',
            carAvatar: 'https://mfair.ua/user/cars/52494/52494-noviy-oficial-bmw-x7-m-50-d-kiev-2019-19.jpg',
            rating: 4.8
        }, 
        {
            id: 3,
            avatar: 'https://sm-news.ru/wp-content/uploads/2020/06/05/ivleevamakeupmain.jpg',
            name: 'Nastya Ivleeva',
            distance: 348,
            rate: 4,
            car: 'Mercedes-AMG GLC 43',
            carAvatar: 'https://autoreview.ru/images/Article/1573/Article_157301_860_575.jpg',
            rating: 2.1
        }
    ],
    currentDriver: null,
    driver: null,
    latitude: 50.5092579,
    longitude: 30.4979999,
    myLatitude: 50.5003828,
    myLongitude: 30.4976448,
    showContract: false,
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
        case CHANGE_LATITUDE:
            return {
                ...state,
                latitude: action.payload,
            }
        case CHANGE_LONGITUDE:
            return {
                ...state,
                longitude: action.payload
            }
        case CHANGE_SHOW_CONTRACT:
            return {
                ...state,
                showContract: action.payload
            }
        case CHANGE_MY_LATITUDE:
            return {
                ...state,
                myLatitude: action.payload
            }
        case CHANGE_MY_LONGITUDE:
            return {
                ...state,
                myLongitude: action.payload
            }
        case CHANGE_CURRENT_DRIVER:
            return {
                ...state,
                currentDriver: action.payload
            }
        case CHANGE_MIN_RATING:
            return {
                ...state,
                minRating: action.payload
            }
        case CHANGE_PRICE_FROM:
            return {
                ...state,
                priceFrom: action.payload
            }
        case CHANGE_PRICE_TO:
            return {
                ...state,
                priceTo: action.payload
            }
    }
    return state;
}