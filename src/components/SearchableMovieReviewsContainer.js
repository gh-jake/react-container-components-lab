import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'oAvb0ZQhZBxkfJsvvEGP7nf3bLS7G1SR';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super();
        this.state = {
            searchTerm: '',
            reviews: []
        }
    }

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(URL + `&query=${this.state.searchTerm}`)
        .then(res => res.json())
        .then(data => 
            {this.setState({
                ...this.state ,
                reviews: data.results
                })
            console.log(data.results);
            }
            
        );
    }
    
    render() {
        // console.log(this.state.reviews)
        
        // const searchResults = this.state.reviews.map(movieObj => <MovieReviews movie={movieObj}/>)
        
        return (
            <div className='searchable-movie-reviews'>
                <form onSubmit={this.handleSubmit} >
                    <label>
                        Search for a movie:
                        <br></br>
                        <input type='text' name='name' onChange={this.handleChange}/>
                    </label>
                    <br></br>
                    <button onClick={this.handleSubmit}>Find films</button>
                </form>
                    <MovieReviews reviews = {this.state.reviews} />
            </div>
        )
    }
}
