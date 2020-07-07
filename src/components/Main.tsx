import  React,{Component} from 'react';
import '../App.css';
import Navbar from './navbar'
import SearchBar from './searchbar';
import Tabs from './Tabs'
import Filters from './Filters'
import {custom} from '../proptypes'
import MovieWall from './MovieWall';
import Scroll from './Scroll'

class Main extends Component<custom>{

  componentDidMount() {
    this.props.giveTopMovies();
  }

  render() {
      return (
    <div >
      <Navbar/>
      <Tabs {...this.props}/>
      <SearchBar {...this.props}/>
      <Filters {...this.props}/>
      <MovieWall {...this.props}/>
      <Scroll {...this.props}/>
    </div>
  );
  }
}

//
export default Main;
