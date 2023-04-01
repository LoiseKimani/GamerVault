import React, { useState, useEffect } from "react";
import axios from "axios";

function AllReviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get("/axios/reviews")
      .then(response => {
        setReviews(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>All Reviews</h1>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <h2>{review.title}</h2>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllReviews;
