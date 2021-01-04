import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import "./Home.css";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    console.log("app start")
  }

  state = {
    movies : [],
    isLoading : true,
  }

  getMovies = async () => {
    const {
      data : {
         data : {movies}
      }
    } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    this.setState({movies, isLoading : false});
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
        <div className="Loader">
          <span className="Loader__text">Loading...</span>
        </div> 
        ) : (
          <div className="movies">
          {
            movies.map(obj => (
              <Movie
              key = {obj.id}
                movie = {obj}
                />
            ))
            /*
            <Movie
            key = {movies[page].id}
            id = {movies[page].id}
            year = {movies[page].year}
            title = {movies[page].title}
            summary = {movies[page].summary}
            poster = {movies[page].medium_cover_image}
            genres = {movies[page].genres}
            />*/
          }
          </div>
        )}
      </section>
    )
  }
}
