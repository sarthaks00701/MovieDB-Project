import React, { Component } from 'react';
import {custom} from '../proptypes'
import Posts from '../data/Posts'


export default class Filters extends Component<custom> {

    handleGenreClick = (name:string) => {
        Posts[3] = name;
        if (Posts[2] === 'Top_Movies') {
            this.props.giveTopMovies();
        }
        else if (Posts[2] === 'Top_TV') {
            this.props.giveTopTV();
        }
        else if (Posts[2] === 'search'){
            this.props.searchPost();
        }
    }

    handleLanguageClick = (name:string) => {
        Posts[4] = name;
        if (Posts[2] === 'Top_Movies') {
            this.props.giveTopMovies();
        }
        else if (Posts[2] === 'Top_TV') {
            this.props.giveTopTV();
        }
        else if (Posts[2] === 'search'){
            this.props.searchPost();
        }
    }

    handleSort = () => {
        Posts[7] = true;
        if (Posts[2] === 'Top_Movies') {
            this.props.giveTopMovies();
        }
        else if (Posts[2] === 'Top_TV') {
            this.props.giveTopTV();
        }
        else if (Posts[2] === 'search'){
            this.props.searchPost();
        }
    }
    // 
    render() {
        return (
            <div className="navbar">
            <div className="dropdown">
                <button className="dropbtn">Genre
                <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                <button id="28" name="Action" onClick={() =>this.handleGenreClick("28")}>Action</button>
                <button id="12" name="Adventure" onClick={() => this.handleGenreClick("12")}>Adventure</button>
                <button id="16" name="Animation" onClick={() => this.handleGenreClick("16")}>Animation</button>
                <button id="35" name="Comedy" onClick={() => this.handleGenreClick("35")}>Comedy</button>
                <button id="80" name="Crime" onClick={() => this.handleGenreClick("80")}>Crime</button>
                <button id="99" name="Documentary" onClick={() => this.handleGenreClick("99")}>Documentary</button>
                <button id="18" name="Drama" onClick={() => this.handleGenreClick("18")}>Drama</button>
                <button id="27" name="Drama" onClick={() => this.handleGenreClick("27")}>Horror</button>
                </div>
            </div>

            <div className="dropdown">
                <button className="dropbtn">Language
                <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                <button id="en" name="English" onClick={() => this.handleLanguageClick("en-US")}>English</button>
                <button id="hi" name="Hindi" onClick={() => this.handleLanguageClick("hi")}>Hindi</button>
                <button id="es" name="Spanish" onClick={() => this.handleLanguageClick("es")}>Spanish</button>
                <button id="ko" name="Korean" onClick={() => this.handleLanguageClick("ko")}>Korean</button>
                </div>
            </div>

            <div className="dropdown2" id="sort">
                <button className="dropbtn">
                <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                </div>
            </div>

            <div className="dropdown">
                <button className="dropbtn">Sort
                <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                <button id="0" name="Popularity" onClick={() => this.handleSort()}>Popularity</button>
                </div>
            </div>


            </div>
        )
    }
}