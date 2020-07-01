import React, { Component } from 'react';
import {POST} from '../proptypes'


class Movie extends Component<POST> {
  render() {
    const post = this.props; 
    return (
        <figure className="grid-figure">
        <div className="grid-photo-wrap">
            <img src={post.imageUrl} alt={post.description} className="grid-photo" />
        </div>
        <figcaption>
          <p id="descrip">{post.description}</p>
          <div className="control-buttons">
          </div>
        </figcaption>
      </figure>
    );
  }
}

export default Movie;