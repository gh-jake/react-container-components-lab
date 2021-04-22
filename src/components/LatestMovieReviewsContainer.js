import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'oAvb0ZQhZBxkfJsvvEGP7nf3bLS7G1SR';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
    constructor() {
        super();
        this.state = {
            reviews: []
        }
    }
    
    componentDidMount() {
        fetch(URL)
        .then(res => res.json())
        .then(data => {
            this.setState({ 
                reviews: data.results 
            })
        });
    }
    
    render() {
        // console.log(this.state);
        // const latestMovies = this.state.reviews.map(movieObj => <MovieReviews movie={movieObj}/>)

        return (
            <div className='latest-movie-reviews'>
                <h2>Latest Reviews:</h2>
                <MovieReviews reviews = {this.state.reviews} />
            </div>
        )
    }
}
