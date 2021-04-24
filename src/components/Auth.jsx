import React, { Component } from "react"
import Login from "./Login"
import { Redirect } from "react-router-dom"
import { withRouter } from "react-router-dom"

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: "",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // method submit when the form is validate
    handleSubmit(data) {
        this.setState({ ...data });
        this.props.onLogin(data.login);
    }

    render() {
        // if the user is login, redirect to home page
        if (this.props.isLogin) return <Redirect to={this.props.location.state? this.props.location.state.from.pathname : "/"} />;
        return (
            <>
                <Login onSubmit={this.handleSubmit} title="React Wines - Login" />
            </>
        )       
    }
}

export default withRouter(Auth)