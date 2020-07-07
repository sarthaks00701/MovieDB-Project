import React, { Component } from "react";
import Posts from '../data/Posts'
import {custom} from '../proptypes'


export default class Scroll extends Component<custom> {

	fetchData = () => {
		Posts[5] = true;
		Posts[6]++;
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

	componentDidMount() {
		window.addEventListener("scroll", () => {
						if (
				window.scrollY + window.innerHeight ===
				document.documentElement.scrollHeight
			) {
				console.log("page ended");
				this.fetchData();
			}
		});
	}

	render() {
		return <div></div>;
	}
}