import React, { Component } from 'react';
import {custom} from '../proptypes'
import Posts from '../data/Posts'

class SearchBar extends Component<custom> {
    handleSubmit= (e:any) => {
        Posts[2] = `search`;
        Posts[0] = e.target.value;
        if (Posts[0] === "") this.props.clear();
        else this.props.searchPost();
    }

    render() {
    return (
        <div>
            <form>
            <input id="search" type="text" placeholder="Search.." onChange={this.handleSubmit}></input>
            </form>
        </div>
    );
    }
}


export default SearchBar;