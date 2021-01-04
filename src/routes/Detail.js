import React, { useState, useEffect } from "react";
import "./Detail.css";

function Detail(props) {
    const [movieData, setMovieData] = useState([]);
    const [genres, setGenres] = useState([]);
    const [torrents, setTorrents] = useState([]);

    useEffect( () =>
    {
        if(props.location.state === undefined)
        {
            props.history.push("/");
        }
        else
        {
            setMovieData(props.location.state.movieData);
            setGenres(props.location.state.movieData.genres);
            setTorrents(props.location.state.movieData.torrents);
        }
    });

    return (
        <div className="detail">
            <img src={movieData.medium_cover_image} alt={movieData.title} title={movieData.title}></img>
            <div className="detail__data">
                <h3 className="detail__title">{movieData.title}</h3>
                <h5 className="detail__year">{movieData.year}</h5>
                <ul className="detail__genres">
                    {genres.map((obj, index) => (
                        <li key={index} className="genres__genre">{obj}</li>
                    ))}
                </ul>
                <p className="detail__summary">{movieData.summary}</p>
                <p className="detail__link">{torrents.map((obj, index) => (
                        <li key={index}>
                            <a href={obj.url}>download link {index}</a>
                            <b/>
                        </li>
                    ))
                }</p>
            </div>
        </div>
    );
}

export default Detail;