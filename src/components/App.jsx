import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"

import logo from '../assets/logo.png'

import Home from './Home'

import Reviews from './Reviews'
import Review from './Review'
// import AddReview from './AddReview'

// import Auth from './Auth'
// import Logout from './Logout'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
            nameUser: null,
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    // method for login the user
    handleLogin(data) {
        // if the state of isLogin is false, we define this state on true
        if (!this.state.isLogin) {
            this.setState({
                isLogin: true,
                nameUser: data
            });
        }
    }

    // method for logout the user
    handleLogout() {
        // if the state of isLogin is true, we define this state on false
        if (this.state.isLogin) {
            this.setState({
                isLogin: false,
                nameUser: null
            });
        }
    }

    render(){
        // let linkConnexion;
        // if (!this.state.isLogin) {
        //     linkConnexion = (
        //         <li>
        //             <Link to="/login">Login</Link>
        //         </li>
        //     );
        // } else {
        //     linkConnexion = (
        //         <li>
        //             <Link to="/logout">Logout</Link>
        //         </li>
        //     );
        // }
        return <>
            <Router>
                <nav fx="">
                    <header>
                        <a href="/">
                            <img src={logo} alt="React-Wines logo" />
                        </a>
                    </header>

                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/reviews">Reviews</Link>
                        </li>
                        {/* <li>
                            <Link to="/add-review">Add review</Link>
                        </li> */}
                        {/* {linkConnexion} */}
                    </ul>
                </nav>

                <main>
                    {this.state.nameUser? <section><p>You are logged in as : {this.state.nameUser}</p></section> : ""}
                    <section>
                        <Switch>
                            {/* Route of the review page with category and slug */}
                            <Route path="/reviews/:category/:slug" render={props => <Review title="React Wines" />} />
                            {/* Route of the reviews page */}
                            <Route path="/reviews" render={props => <Reviews title="React Wines" />} />
                            {/* Route of the review page with slug only */}
                            <Route path="/review/:slug" render={props => <Review title="React Wines" />} />
                            {/* Route to add a review */}
                            {/* <Route path="/add-review" render={props => <AddReview isLogin={this.state.isLogin} title="React Wines - Add review" />} /> */}
                            {/* Login page route */}
                            {/* <Route path="/login" render={props => <Auth onLogin={this.handleLogin} isLogin={this.state.isLogin} />} /> */}
                            {/* Logout page route */}
                            {/* <Route path="/logout" render={props => <Logout onLogout={this.handleLogout} isLogin={this.state.isLogin} title="React Wines - Logout" />} /> */}
                            {/* Home page route (lastly) */}
                            <Route path="/" render={props => <Home title="React Wines - Home"/>} />
                        </Switch>
                    </section>
                </main>

                <footer>
                    <p>React Wines &copy; 2020 - Developed by <a href="https://matthieutruche.fr" target="blank" title="Matthieu Truche | Portfolio">Matthieu Truche</a></p>
                </footer>
            </Router>
        </>
    }
    
}

