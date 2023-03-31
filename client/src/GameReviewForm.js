import React, { useState } from "react";

function GameReviewForm() {
  const [gameName, setGameName] = useState("");
  const [gamePicture, setGamePicture] = useState("");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  function handleGameNameChange(event) {
    setGameName(event.target.value);
  }

  function handleGamePictureChange(event) {
    setGamePicture(event.target.value);
  }

  function handleRatingChange(event) {
    setRating(event.target.value);
  }

  function handleReviewChange(event) {
    setReview(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:3000/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ gameName, gamePicture, rating, review }),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        alert("Review submitted successfully!");
        setGameName("");
        setGamePicture("");
        setRating(0);
        setReview("");
      })
      .catch((error) => {
        console.log(error);
        alert("Error submitting review. Please try again.");
      });
  }

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
}

export default GameReviewForm;
