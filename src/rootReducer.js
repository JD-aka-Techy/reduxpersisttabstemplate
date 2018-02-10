import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

import counter from './reducers/counter';

export const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  routing: routerReducer,
  counter
});

const persistedReducer = persistReducer(persistConfig, rootReducer)



export default persistedReducer;