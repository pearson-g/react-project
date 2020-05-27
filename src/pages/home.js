import React, { Component } from 'react';
import {connect} from "react-redux";
import AddTodo from '../components/AddTodo';
import TodoList from '../containers/VisibleTodos';
import Footer from '../components/Footer';


class Home extends Component {
    constructor(props) {
        super(props)

    }


    render() {
        return (
            <div>
                {/* Todo */}
                <AddTodo />
                <TodoList />
                <Footer />
            </div>
        )
    }
}


export default Home