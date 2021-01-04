import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

function Movie(props) {
    const [id, setId] = useState(0);
    const [year, setYear] = useState(0);
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [poster, setPoster] = useState('');
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        setId(props.id);
        setYear(props.year);
        setTitle(props.title);
        setSummary(props.summary);
        setPoster(props.poster);
        setGenres(props.genres);
        document.title = id + ': ' + title;
    });

    useEffect(() => {
        function handleStatusChange(status) {
            setTitle('test123');
        }

        return function cleanup() {

        };
    });

    return (
        <div className="movie">
            <img src={poster} alt={title} title={title}></img>
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="genres">
                    {genres.map((obj, index) => (
                        <li key={index} className="genres__genre">{obj}</li>
                    ))}
                </ul>
                <p className="movie__summary">{summary}</p>
            </div>
        </div>
    )
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.array.isRequired,
}

export default Movie;