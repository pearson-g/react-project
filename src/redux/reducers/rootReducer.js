import {persistCombineReducers} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducer1 from './items/reducer1';

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = persistCombineReducers(persistConfig, {
    reducer1
})

export default rootReducer;