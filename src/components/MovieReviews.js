// Code MovieReviews Here
import React from 'react'

const Movie = (props) => {
    return (
        <div className='review'>
            {props.movie.display_title}
            <br></br>
            {props.movie.link.url}
            <br></br>
            <br></br>
        </div>
    )
}

const MovieReviews = (props) => {
    const results = props.reviews.map(movieObj =>  { return (<div className='review'>
    {movieObj.display_title}
    <br></br>
    {movieObj.link.url}
    <br></br>
    <br></br>
</div>)})
    
    return (
        <div className='review-list'>
            {results}
        </div>
    )
}

export default MovieReviews;