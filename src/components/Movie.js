import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import "./Movie.css";

function Movie(props) {
    const [movieData, setMovieData] = useState([]);
    const [genres, setGenres] = useState([]);
    const [summary, setSummary] = useState("");

    useEffect(() => {
        setMovieData(props.movie);
        setGenres(props.movie.genres);
        setSummary(props.movie.summary);
        document.title = 'movie list';
    });

    return (
        <div className="movie">
            <Link
                to={{
                    pathname:"/movie-detail",
                    state: {movieData}
                }}
                >
                <img src={movieData.medium_cover_image} alt={movieData.title} title={movieData.title}></img>
                <div className="movie__data">
                    <h3 className="movie__title">{movieData.title}</h3>
                    <h5 className="movie__year">{movieData.year}</h5>
                    <ul className="movie__genres">
                        {genres.map((obj, index) => (
                            <li key={index} className="genres__genre">{obj}</li>
                        ))}
                    </ul>
                    <p className="movie__summary">{summary.slice(0, 140)}...</p>
                </div>
           </Link>
        </div>
    )
}

export default Movie;