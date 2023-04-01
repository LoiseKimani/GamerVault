import React, { useState } from "react";
import axios from "axios";

function NewReview() {
  const [gameImage, setGameImage] = useState("");
  const [gameName, setGameName] = useState("");
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("game_image", gameImage);
    formData.append("game_name", gameName);
    formData.append("rating", rating);
    formData.append("comment", comment);

    axios.post("/game-review", formData)
      .then((response) => {
        console.log("Review submitted successfully.");
      })
      .catch((error) => {
        console.error("Error submitting review.", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="gameImage">Game Image:</label>
        <input
          type="file"
          id="gameImage"
          name="game_image"
          onChange={(e) => setGameImage(e.target.files[0])}
          required
        />
      </div>
      <div>
        <label htmlFor="gameName">Game Name:</label>
        <input
          type="text"
          id="gameName"
          name="game_name"
          value={gameName}
          onChange={(e) => setGameName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          name="rating"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          name="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          ></textarea>
          </div>
          <button type="submit">Submit Review</button>
        </form>
        );
        }
        
        export default NewReview;


// import React, { useState } from "react";
// import { Form, Button } from 'react-bootstrap';
// import axios from 'axios';

// const NewReview = () => {
//   const [gameImage, setGameImage] = useState("");
//   const [gameName, setGameName] = useState("");
//   const [rating, setRating] = useState("");
//   const [comment, setComment] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("game_image", gameImage);
//     formData.append("game_name", gameName);
//     formData.append("rating", rating);
//     formData.append("comment", comment);

//     axios.post("/game-review", formData)
//       .then((response) => {
//         console.log("Review submitted successfully.");
//       })
//       .catch((error) => {
//         console.error("Error submitting review.", error);
//       });
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <Form.Group controlId="gameImage">
//         <Form.Label>Game Image:</Form.Label>
//         <Form.Control
//           type="file"
//           name="game_image"
//           onChange={(e) => setGameImage(e.target.files[0])}
//           required
//         />
//       </Form.Group>
//       <Form.Group controlId="gameName">
//         <Form.Label>Game Name:</Form.Label>
//         <Form.Control
//           type="text"
//           name="game_name"
//           value={gameName}
//           onChange={(e) => setGameName(e.target.value)}
//           required
//         />
//       </Form.Group>
//       <Form.Group controlId="rating">
//         <Form.Label>Rating:</Form.Label>
//         <Form.Control
//           type="number"
//           name="rating"
//           min="1"
//           max="5"
//           value={rating}
//           onChange={(e) => setRating(e.target.value)}
//           required
//         />
//       </Form.Group>
//       <Form.Group controlId="comment">
//         <Form.Label>Comment:</Form.Label>
//         <Form.Control
//           as="textarea"
//           name="comment"
//           value={comment}
//           onChange={(e) => setComment(e.target.value)}
//           required
//         />
//       </Form.Group>
//       <Button type="submit" variant="primary">Submit</Button>
//     </Form>
//   );
// };

// export default NewReview;


// // import React, { useState } from "react";

// // const NewReview = () => {
// //   const [gameImage, setGameImage] = useState("");
// //   const [gameName, setGameName] = useState("");
// //   const [rating, setRating] = useState("");
// //   const [comment, setComment] = useState("");

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     const formData = new FormData();
// //     formData.append("game_image", gameImage);
// //     formData.append("game_name", gameName);
// //     formData.append("rating", rating);
// //     formData.append("comment", comment);

// //     axios.post("/game-review", formData)
// //       .then((response) => {
// //         console.log("Review submitted successfully.");
// //       })
// //       .catch((error) => {
// //         console.error("Error submitting review.", error);
// //       });
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <div>
// //         <label htmlFor="gameImage">Game Image:</label>
// //         <input
// //           type="file"
// //           id="gameImage"
// //           name="game_image"
// //           onChange={(e) => setGameImage(e.target.files[0])}
// //           required
// //         />
// //       </div>
// //       <div>
// //         <label htmlFor="gameName">Game Name:</label>
// //         <input
// //           type="text"
// //           id="gameName"
// //           name="game_name"
// //           value={gameName}
// //           onChange={(e) => setGameName(e.target.value)}
// //           required
// //         />
// //       </div>
// //       <div>
// //         <label htmlFor="rating">Rating:</label>
// //         <input
// //           type="number"
// //           id="rating"
// //           name="rating"
// //           min="1"
// //           max="5"
// //           value={rating}
// //           onChange={(e) => setRating(e.target.value)}
// //           required
// //         />
// //       </div>
// //       <div>
// //         <label htmlFor="comment">Comment:</label>
// //         <textarea
// //           id="comment"
// //           name="comment"
// //           value={comment}
// //           onChange={(e) => setComment(e.target.value)}
// //           required
// //         ></textarea>
// //       </div>
// //       <button type="submit">Submit</button>
// //     </form>
// //   );
// // };

// // export default NewReview;
