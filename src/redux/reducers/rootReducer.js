import {persistCombineReducers} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import todos from './items/todos';
import visibilityFilters from './items/visibilityFilters';

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = persistCombineReducers(persistConfig, {
    todos,
    visibilityFilters
})

export default rootReducer;