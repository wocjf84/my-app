import React from 'react';
import axios from 'axios';
import Movie from './Movie';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("hello")
  }

  state = {
    movies : [],
    page : 0,
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

  OnClickPrevPage = () =>
  {
    this.setState( obj =>
      (
        {
          page : obj.page > 0 ? obj.page - 1 : obj.movies.length - 1
        }
      )
    );
  };

  OnClickNextPage = () =>
  {
    this.setState( obj =>
      (
        {
          page : obj.page + 1 < obj.movies.length ? obj.page + 1 : 0
        }
      )
    );
  };

  render() {
    const { page, isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
        <div className="Loader">
          <span className="Loader__text">Loading...</span>
        </div> 
        ) : (
          <div className="movies">
          {
            <Movie
            key = {movies[page].id}
            id = {movies[page].id}
            year = {movies[page].year}
            title = {movies[page].title}
            summary = {movies[page].summary}
            poster = {movies[page].medium_cover_image}
            genres = {movies[page].genres}
            />
          }
          </div>
        )}
        <button className="prevButton" onClick={this.OnClickPrevPage}>이전</button>
        <button className="nextButton" onClick={this.OnClickNextPage}>다음</button>
      </section>
    )
  }
}
