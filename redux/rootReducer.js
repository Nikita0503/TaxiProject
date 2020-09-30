import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import {loginReducer} from './login/reducers';
import {signUpReducer} from './signUp/reducers';
import {mapReducer} from './menu/home/reducers';
import {historyReducer} from './menu/history/reducers';
import {cardsReducer} from './menu/cards/reducers';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['login']
}

const rootReducer = combineReducers({
    login: loginReducer,
    signUp: signUpReducer,
    map: mapReducer,
    history: historyReducer,
    cards: cardsReducer
});

export default persistReducer(persistConfig, rootReducer);