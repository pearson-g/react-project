import * as TYPES from '../actionTypes';

export function action1 (token) {
    return (dispatch) => {
        dispatch({
            type: TYPES.ACTION1,
            token: token
        })
    }
}