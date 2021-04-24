import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

export default class Logout extends Component {
    componentDidMount() {
        // if the user is login, we execute a logout
        if (this.props.isLogin) {
            this.props.onLogout();
        }
    }
    
    render() {
        // redirection to home page
        return <Redirect to="/" />
    }
}
