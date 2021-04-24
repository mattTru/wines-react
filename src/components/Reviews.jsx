import React from 'react'
import api from './../api/db.json'
import './../styles/Reviews.css'
import { Link, withRouter } from "react-router-dom"
import Pagination from './Pagination'

function Reviews(props) {
    // chosen category
    const categoryChoice = props.history.location.state?.categoryChoice;

    // we define the title of the page
    document.title = categoryChoice ? 'React-Wines - ' + categoryChoice : "React-Wines";
    
    // filtering
    const filter = api.reviews.filter((review) => {
        return categoryChoice === "" || !categoryChoice ? true : categoryChoice === review.category;
    })

    // parser function
    let parser = (url) =>
    url
      .slice(url.indexOf("?") + 1)
      .split("&")
      .reduce((a, c) => {
        let [key, value] = c.split("=");
        if (key) a[key] = value;
        return a;
      }, {});
    // we parse the url
    const paramsUrl = parser(props.history.location.search);

    // Pagination
    // number of reviews per page
    const nbReviewsPage = 15;

    // we define the page
    const page = parseInt(paramsUrl["page"]) || 1;

    // number of pages
    const nbPages = Math.ceil(filter.length / nbReviewsPage);

    // recuperation of reviews that are to be displayed on the page
    const reviewsPage = filter.slice(page * nbReviewsPage - nbReviewsPage, nbReviewsPage * page);

    // for each review, we return it in an <article>
    const listReviews = reviewsPage.map((review, id) => {
        return (
            <article className="article__reviews" key={id}>
                {/* if the user have choose a category, we write this category in the route */}
                {categoryChoice?
                    <Link to={`/reviews/${review.category + "/"}${review.slug}`}>
                    <h3>{review.title}</h3>
                    <p>{review.description}</p>
                    <p>Note: {review.points} / 100</p>
                    </Link>
                :
                    <Link to={`/review/${review.slug}`}>
                    <h3>{review.title}</h3>
                    <p>{review.description}</p>
                    <p>Note: {review.points} / 100</p>
                    </Link>
                }
                
            </article>
        );
    });

    // for each category stored in the API, we return it in an <option>
    const listCategories = api.categories.map((category) => {
        return (
            <option key={category.id} value={category.key}>{category.label}</option>
        );
    });


    // handleChange method to push a new entry on the history stack
    const handleChange = (event) => {
        props.history.push({
            ...props.location,
            state: {
                ...props.location.state,
                categoryChoice: event.target.value,
            },
            search: `?${new URLSearchParams({
                ...paramsUrl,
                page: 1,
            })}`,
        });
    };

    const handleClick = (page) => {
        // if the number of the page is greater and it is less than or equal to the number of pages, we push a new entry on the history stack
        if (page > 0 && page <= nbPages) {
          props.history.push({
            ...props.location,
            search: `?${new URLSearchParams({
              ...props.history.location.search.page,
              page: page,
            })}`,
          });
          // after that the user click, we scroll at the top of the page
          window.scrollTo(0, 0);
        }
    };
    
    return (
            <>
                <h1>List of reviews {categoryChoice? ' - ' + categoryChoice : ''}</h1>
                <select name="category" onChange={handleChange} value={categoryChoice}>
                    <option value="">Choice a category</option>
                    {listCategories}
                </select>
                <div>{listReviews}</div>
                <Pagination nbPages={nbPages} currentPage={page} onClick={handleClick} />
            </>
        );
}

export default withRouter(Reviews);