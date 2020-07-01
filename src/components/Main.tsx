import  React,{Component} from 'react';
import '../App.css';
import Navbar from './navbar'
import SearchBar from './searchbar';
import {POST,movie,custom} from '../proptypes'
import MovieWall from './MovieWall';
import Tabs from './Tabs'
import Filters from './Filters'




class Main extends Component<custom>{

  passdata = (data:any) => {
    const posts: POST[] = [];
      data.results.map((movie:movie) => {
          let post:POST = {id:movie.id,imageUrl:`https://image.tmdb.org/t/p/w500${movie.poster_path}`,description:movie.title}; 
          posts.push(post);
          return 0;    
      })
    return posts;
  }

  async dodata(url : string) {
    await fetch(url)
        .then(data => data.json())
        .then(data => {this.props.searchPost(this.passdata(data))})
  }
    
  componentDidUpdate() {
    
    const url_init:string = `https://api.themoviedb.org/3`;
    const api_key :string = `b12b3be8f9bb02b35f468c103469ff68`

    if (this.props.posts[2]==='Top_Movies') {
      let url:string = `${url_init}/movie/popular?api_key=${api_key}&language=${this.props.posts[4]}&page=1`;//
      if (this.props.posts[3] !== '') {
        url += `&with_genres=${this.props.posts[3]}`
      }
      this.dodata(url);
    }

    if (this.props.posts[2]==='Top_TV') {
      let url:string = `${url_init}/tv/popular?api_key=${api_key}&language=${this.props.posts[4]}&page=1`;//
      if (this.props.posts[3] !== '') {
        url += `&with_genres=${this.props.posts[3]}`
      }
    this.dodata(url);
  }


    if (this.props.posts[2]==='search' && this.props.posts[0] !== '') { 
      const url:string = `${url_init}/search/movie?api_key=${api_key}&query=${this.props.posts[0]}`
      this.dodata(url);
    }
  }

  render() {
      return (
    <div >
      <Navbar/>
      <Tabs {...this.props}/>
      <Filters {...this.props}/>
      <SearchBar {...this.props}/>
      <MovieWall {...this.props}/>
    </div>
  );
  }
}

//
export default Main;
