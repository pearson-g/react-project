import React, { Component } from 'react';
import {connect} from "react-redux";


class About extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <h1>这里是About页面,{this.props.reducer1.token} </h1>

        )
    }
}

function select(store) {
    return {
        reducer1: store.reducer1
    }
}


export default connect(select)(About)