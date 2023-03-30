import React, { useState } from "react";

const GameReviewForm = () => {
  const [gameName, setGameName] = useState("");
  const [gamePicture, setGamePicture] = useState("");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const handleGameNameChange = (event) => {
    setGameName(event.target.value);
  };

  const handleGamePictureChange = (event) => {
    setGamePicture(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // do something with the form data, e.g. send it to a server
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="game-name">Game Name:</label>
        <input
          type="text"
          id="game-name"
          value={gameName}
          onChange={handleGameNameChange}
        />
      </div>
      <div>
        <label htmlFor="game-picture">Game Picture:</label>
        <input
          type="text"
          id="game-picture"
          value={gamePicture}
          onChange={handleGamePictureChange}
        />
      </div>
      <div>
        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          value={rating}
          onChange={handleRatingChange}
        />
      </div>
      <div>
        <label htmlFor="review">Review:</label>
        <textarea id="review" value={review} onChange={handleReviewChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default GameReviewForm;
