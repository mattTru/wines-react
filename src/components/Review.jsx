import React from 'react'
import { useParams } from "react-router" 

import api from "./../api/db.json"

export default function Review(props) {
    // we get the object as a parameter
    const { slug } = useParams();

    // we retrieve the linked review which is equal to the slug retrieve as a parameter before
    const review = api.reviews.find((review) => review.slug === slug);

    // we define the title of the page
    document.title = review? props.title + ' - ' + review.title : props.title;

    return (
            <>
                {review
                ?   <article>
                        <h3>{review?.title}</h3>
                        <p>{review?.description}</p>
                        <p>Winery: {review?.winery}</p>
                        {review.price? <p>Price: {review?.price}€</p> : ""}
                        <p>Note: {review?.points} / 100</p>
                    </article>
                :   <p>No review found</p>
                }
            </>
        );
}