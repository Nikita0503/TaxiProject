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
          validThruMM: '12',
          validThruYY: '34',
          cardHolderName: '123Lee M. Cardholder',
          color: 'green',
          balance: 119
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          cardNumber: '2151 5238 2015 2300',
          validThruMM: '12',
          validThruYY: '34',
          cardHolderName: 'Lee M. Cardholder',
          color: 'blue',
          balance: 1000
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          cardNumber: '3151 5238 2015 2300',
          validThruMM: '12',
          validThruYY: '34',
          cardHolderName: 'Lee M. Cardholder',
          color: 'yellow',
          balance: 252
        },
        {
          id: '58694a0f-3da1-471f-bd96-141271e29d72',
          cardNumber: '4151 5238 2015 2300',
          validThruMM: '12',
          validThruYY: '34',
          cardHolderName: 'Lee M. Cardholder',
          color: 'red',
          balance: 503
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e25h72',
          cardNumber: '5151 5238 2015 2300',
          validThruMM: '12',
          validThruYY: '34',
          cardHolderName: 'Lee M. Cardholder',
          color: 'orange',
          balance: 374
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
            name: 'Ivan Ivanov',
            avatar: 'https://radiopotok.ru/f/i/2019/8/5/825_1565023537-f6d62a.jpg',
            car: 'BMW x7',
            drove: 8,
            sum: 15
        },
        {
            id: 2,
            name: 'Mark McMan',
            avatar: 'https://radiopotok.ru/f/i/2019/8/5/825_1565023537-f6d62a.jpg',
            car: 'BMW x7',
            drove: 31,
            sum: 176
        },
        {
            id: 3,
            name: 'Shakal',
            avatar: 'https://radiopotok.ru/f/i/2019/8/5/825_1565023537-f6d62a.jpg',
            car: 'BMW x7',
            drove: 25,
            sum: 21
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