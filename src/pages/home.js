import React, { Component } from 'react';
import {connect} from "react-redux";
import {action1} from '../redux/actions/action1';

class Home extends Component {
    constructor(props) {
        super(props)

    }

    handleClick= () => {
        this.props.dispatch(action1(202))
    }

    render() {
        return (
            <div>
                <h1>这里是Home页面</h1>
            <ul>
                <li onClick={this.handleClick}>
                    点我
                </li>
            </ul>
            </div>
        )
    }
}

function select(store) {
    return {
        reducer1: store.reducer1
    }
}

export default connect(select)(Home)