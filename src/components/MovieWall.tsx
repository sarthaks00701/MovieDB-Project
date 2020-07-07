import React, { Component } from 'react';
import Movie from './Movie'
import {POST,custom} from '../proptypes'


class MovieWall extends Component<custom>{
  render() {
    return (
      <div>  
      <div className="photo-grid">
        {this.props.posts[1].map((post:POST, i) => {
          return <Movie key={i} {...post} />
        })}
      </div>
      </div>
    );
  }
}

export default MovieWall;


//.sort(function(x, y){return y.id - x.id;})