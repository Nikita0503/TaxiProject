import {
    ADD_CARD,
    SHOW_CARD_BLANK,
    CARD_NUMBER_CHANGE,
    VALID_THRU_MM_CHANGE,
    VALID_THRU_YY_CHANGE,
    CARD_HOLDER_NAME_CHANGE,
    CVV_CHANGE,
    SELECT_CARD,
    PAY,
    ADD_CHECK
} from './actions';

const defaultState = {
    cards: [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          cardNumber: '1151 5238 2015 2300',
          validThruMM: '08',
          validThruYY: '09',
          cardHolderName: 'Lee M. Cardholder',
          colors: ['#88d00b', '#7faf2c', '#597a1f'],
          balance: 119
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          cardNumber: '2151 5238 2015 2300',
          validThruMM: '12',
          validThruYY: '10',
          cardHolderName: 'Caleb Backer',
          colors: ['#495cd0', '#29399e', '#1d2971'],
          balance: 1000
        },
        {
          id: '58694a0f-3da1-471f-bd96-141271e29d72',
          cardNumber: '5308 9184 7446 2085',
          validThruMM: '07',
          validThruYY: '11',
          cardHolderName: 'Arnold Campbell',
          colors: ['#d25251', '#a62c2b', '#7a201f'],
          balance: 503
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e25h72',
          cardNumber: '6122 0136 8173 6041',
          validThruMM: '12',
          validThruYY: '34',
          cardHolderName: 'Timothy Durham',
          colors: ['#ffcc00', '#d6ab00', '#9e7e00'],
          balance: 374
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            cardNumber: '3418 3468 7839 3374',
            validThruMM: '02',
            validThruYY: '10',
            cardHolderName: 'Zhess Harris',
            colors: ['#eff26d', '#cccf44', '#a8aa2c'],
            balance: 252
          },
    ],
    shownCardBlank: false,
    cardNumber: '',
    validThruMM: '',
    validThruYY: '',
    cardHolderName: '',
    cvv: '',
    selectedCard: null,
    checks: [
        {
            id: 1,
            name: 'Danil Ivanov',
            avatar: 'https://ss.metronews.ru/userfiles/materials/127/1274795/858x540.jpg',
            car: 'BMW x7',
            drove: 8,
            sum: 15
        },
        {
            id: 2,
            name: 'Mark McMan',
            avatar: 'https://images2.minutemediacdn.com/image/fetch/w_736,h_485,c_fill,g_auto,f_auto/https%3A%2F%2Fdailyddt.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F07%2F1205081525-850x560.jpeg',
            car: 'BMW x7',
            drove: 31,
            sum: 176
        },
        {
            id: 3,
            name: 'Morgensterm',
            avatar: 'https://www.infox.ru/photo/13c/e0e/13ce0e4824b970d8fd71178b1c26e913asdasdasd5ee226bc1d9d53.28424698-650x433-13ce0e4824b970d8fd71178b1c26e913.jpg',
            car: 'BMW x7',
            drove: 25,
            sum: 21
        },
        {
            id: 4,
            name: 'Denis Romashin',
            avatar: 'https://lh3.googleusercontent.com/L0nvqELFvwtMjrwbqAXdsKq19DMrc2sc87sfO2tfx7XYpVc9N6-I5D8-5gzRq60BmUS2=s88',
            car: 'Deo Lanos',
            drove: 45,
            sum: 2
        }
    ]
}

export const cardsReducer = (state = defaultState, action) => {
    
    switch (action.type){
        case ADD_CARD:
            return {
                ...state,
                cards: [...state.cards, action.payload],
            }
        case SHOW_CARD_BLANK:
            return {
                ...state,
                shownCardBlank: action.payload
            }
        case CARD_NUMBER_CHANGE:
            return {
                ...state,
                cardNumber: action.payload
            }
        case VALID_THRU_MM_CHANGE:
            return {
                ...state,
                validThruMM: action.payload
            }
        case VALID_THRU_YY_CHANGE:
            return {
                ...state,
                validThruYY: action.payload
            }
        case CARD_HOLDER_NAME_CHANGE:
            return {
                ...state,
                cardHolderName: action.payload
            }
        case CVV_CHANGE:
            return {
                ...state,
                cvv: action.payload
            }
        case SELECT_CARD:
            return {
                ...state,
                selectedCard: action.payload
            }
        case PAY:
            return {
                ...state,
                cards: state.cards.map(item => {
                    if(item.cardNumber == state.selectedCard.cardNumber){
                        item.balance -= action.payload.sum
                    }
                    return item
                }),
                checks: state.checks.filter(item => {
                    if(item.id == action.payload.id){
                        return false
                    }else{
                        return true
                    }
                })
            }
        case ADD_CHECK:
            return {
                ...state,
                checks: [...state.checks, action.payload]
            }
    }
    return state;
}