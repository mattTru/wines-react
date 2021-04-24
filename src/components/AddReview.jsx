import React, {Component} from "react"
import { Redirect } from "react-router-dom"
import { withRouter } from "react-router-dom"

import api from "./../api/db.json"

class AddReview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: "",
            title: "",
            wine: "",
            categoryChoice: "",
            price: "",
            review: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        // we define the title of the page
        document.title = props.title;
    }

    // method active when changing the value of an input
    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    }

    // method that is triggered when the form is validated 
    handleSubmit(event) {
        event.preventDefault();
    }

    // list of categories
    listCategory = api.categories.map((category) => {
        return (
            <option key={category.id} value={category.key}>
                {category.label}
            </option>
        );
    });

    render(){
        // if the user is not login, redirect to the login page
        if (!this.props.isLogin) return <Redirect to={{ pathname: "/login", state: { from: this.props.location }}} />;
        return (
            <form action="" onSubmit={this.handleSubmit}>
                {/* author */}
                <label>Author : <input type="text" name="author" value={this.state.author} onChange={this.handleChange} /></label>
                {/* title */}
                <label>Title : <input type="text" name="title" value={this.state.title} onChange={this.handleChange} /></label>
                {/* wine */}
                <label>Wine : <input type="text" name="wine" value={this.state.wine} onChange={this.handleChange} /></label>
                {/* category */}
                <label>Category : 
                    <select name="categoryChoice" value={this.props.categoryChoice} onChange={this.handleChange}>
                        <option value="">Choice a category</option>
                        {this.listCategory}
                    </select>
                </label>
                {/* price */}
                <label>Price : <input type="number" name="price" value={this.state.price} onChange={this.handleChange} /></label>
                {/* review */}
                <label>Review : <textarea type="text" name="review" value={this.state.review} onChange={this.handleChange}></textarea></label>
                <input type="submit" value="Add review"/>
            </form>
        )
    }
}

export default withRouter(AddReview);