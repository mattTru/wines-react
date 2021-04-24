import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: "",
            password: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        // we define the title of the page
        document.title = props.title;
    }

    // method active when changing the value of an input
    handleChange(event) {
        const {value, name} = event.target;
        this.setState({
            [name]: value,
        });
    }

    // method that is triggered when the form is validated 
    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit({ ...this.state });
    }

    render() {
        return (
            <>
                <form action="" onSubmit={this.handleSubmit}>
                    <label>Login : <input type="text" name="login" value={this.state.login} onChange={this.handleChange} /></label>
                    <label>Password : <input type="password" name="password" value={this.state.password} onChange={this.handleChange} /></label>
                    <input type="submit" value="Sign in"/>
                </form>
            </>
        );
    }   
}
