import * as TYPES from '../../actionTypes';

const initialState = {
    token: 200
}

export default function Option(state = initialState, action) {
    switch (action.type) {
        case TYPES.ACTION1:
            return Object.assign({}, state, {
                ...action
            });
            break;
        default:
            return state;
    }
}