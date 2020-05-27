import * as TYPES from '../actionTypes';
let nextTodoId = 0;

export function addTodo (text) {
    return (dispatch) => {
        dispatch({
            type: 'ADD_TODO',
            text: text,
            id: nextTodoId++
        })
    }
}

export function toggleTodo (id) {
    return (dispatch) => {
        dispatch({
            type: 'TOGGLE_TODO',
            id
        })
    }
}

export function setVisibilityFilter (filter) {
    return (dispatch) => {
        dispatch({
            type: 'SET_VISIBILITY',
            filter
        })
    }
}

export const Filters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    SHOW_COMPLETED: 'SHOW_COMPLETED' 

}