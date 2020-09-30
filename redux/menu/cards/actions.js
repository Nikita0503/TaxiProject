export const ADD_CARD = 'ADD_CARD';
export const SHOW_CARD_BLANK = 'SHOW_CARD_BLANK';
export const CARD_NUMBER_CHANGE = 'CARD_NUMBER_CHANGE';
export const VALID_THRU_MM_CHANGE = 'VALID_THRU_MM_CHANGE';
export const VALID_THRU_YY_CHANGE = 'VALID_THRU_YY_CHANGE';
export const CARD_HOLDER_NAME_CHANGE = 'CARD_HOLDER_NAME_CHANGE';
export const CVV_CHANGE = 'CVV_CHANGE';
export const SELECT_CARD = 'SELECT_CARD';
export const PAY = 'PAY';

export const addCard = card => ({
    type: ADD_CARD,
    payload: card
});

export const showCardBankChange = (show) => ({
    type: SHOW_CARD_BLANK,
    payload: show
});

export const cardNumberChange = (cardNumber) => ({
    type: CARD_NUMBER_CHANGE,
    payload: cardNumber
});

export const validThruMMChange = (validThruMM) => ({
    type: VALID_THRU_MM_CHANGE,
    payload: validThruMM
});

export const validThruYYChange = (validThruYY) => ({
    type: VALID_THRU_YY_CHANGE,
    payload: validThruYY
});

export const cardHolderNameChange = (cardHolderName) => ({
    type: CARD_HOLDER_NAME_CHANGE,
    payload: cardHolderName
});

export const cvvChange = (cvv) => ({
    type: CVV_CHANGE,
    payload: cvv
});

export const selectCard = (card) => ({
    type: SELECT_CARD,
    payload: card
});

export const pay = (sum) => ({
    type: PAY,
    payload: sum
})