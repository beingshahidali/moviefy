import React from "react";

export default function MovieCard({ movie }) {
  // Define styles as JavaScript objects
  const cardStyle = {
    backgroundImage: `url('backgroundPic.jpg')`,
    
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    margin: "16px",
    padding: "16px",
    maxWidth: "400px",
  };

  const imageStyle = {
    maxWidth: "100%",
    height: "auto",
  };

  const titleStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    fontFamily: "Helvetica"
  };

  const smallTextStyle = {
    fontSize: "1.3rem",
    fontWeight: "bold",
    fontFamily: "Helvetica"
  };

  const descStyle = {
    fontSize: "1.4rem",
    fontFamily: "Helvetica"
  };

  return (
    <div className="card" style={cardStyle}>
      <img
        className="card--image"
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
        alt={movie.title + " poster"}
        style={imageStyle}
      />
      <div className="card--content">
        <h3 className="card--title" style={titleStyle}>
          {movie.title}
        </h3>
        <p>
          <small style={smallTextStyle}>RELEASE DATE: {movie.release_date}</small>
        </p>
        <p>
          <small style={smallTextStyle}>RATING: {movie.vote_average}</small>
        </p>
        <p className="card--desc" style={descStyle}>
          {movie.overview}
        </p>
      </div>
    </div>
  );
}
