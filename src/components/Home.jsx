import React from 'react'

export default function Home(props) {
    // we define the title of the page
    document.title = props.title;

    return (
            <>
                <p>Home page</p>
            </>
        );
}