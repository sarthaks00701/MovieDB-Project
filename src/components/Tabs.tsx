import React, { Component } from 'react';
import {custom} from '../proptypes'
import Posts from '../data/Posts'

class Tabs extends Component<custom> {

    handleSubmitMovies=() => {
        Posts[2] = 'Top_Movies';
        this.props.giveTopMovies(); 
    }

    handleSubmitTV=() => {
        Posts[2] = 'Top_TV';
        this.props.giveTopTV(); 
    }

    render() {
        return(
            <div>
                <div className="tabContainer">
                <div className="buttonContainer">
                    <button onClick={this.handleSubmitMovies}>MOVIES</button>
                    <button onClick={this.handleSubmitTV}>TV SERIES</button>
                </div>
                </div>
            </div>
        )
    }
}

export default Tabs