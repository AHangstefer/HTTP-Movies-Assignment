import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import MovieCard from "./MovieCard";


function Movie({ addToSavedList }) {
  const [movie, setMovie] = useState(null);
  const params = useParams();
  const {push} = useHistory();

  const item = addToSavedList.items.id.find(
    thing => `${thing.id}` === addToSavedList.match.params.id
  );

  const fetchMovie = (id) => {
    axios
      .get(`http://localhost:5000/api/movies/${item.id}`)
      .then((res) => {
        console.log ("this is your axios then: ", res.data)
        setMovie(res.data)
        push("/update-movie")
      })
      .catch((err) => console.log(err.response));
  };

  const saveMovie = () => {
    addToSavedList(movie);
  };

  useEffect(() => {
    fetchMovie(params.id);
  }, [params.id]);

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className="save-wrapper">
      <MovieCard movie={movie} />

      <div className="save-button" onClick={saveMovie}>
        Save
      </div>

      <div classNme = "edit-button" onClick={()=> push(`/update-movie/${item.id}`)}>
        Edit
      </div>

    </div>
  );
}

export default Movie;
