import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../redux/actions/index';

 const AddTodo = ({dispatch}) => {
    let input

    return (
        <form onSubmit={(e)=>{
            e.preventDefault()
            if(!input.value.trim()) {
                return
            }
            // 提交到store
            dispatch(addTodo(input.value))
            input.value = ''
        }}> 
            <input ref={node => (input = node)}/>
            <button type='submit'>addTodo</button>
        </form>
    )
}

export default connect()(AddTodo)