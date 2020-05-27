const todos = (state=[], action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(
                i => i.id === action.id ? {...i,completed: !i.completed} : i
            )
        default:
            return state
    }
}

export default todos