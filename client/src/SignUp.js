// import { useState } from 'react';
// import React from 'react';

// function SignupPage() {
//   const [username, setUsername] = useState('');
//   const [profileImage, setProfileImage] = useState('');
//   const [password, setPassword] = useState('');

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//   };

//   const handleProfileImageChange = (event) => {
//     setProfileImage(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission logic here
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Username:
//         <input type="text" value={username} onChange={handleUsernameChange} />
//       </label>
//       <br />
//       <label>
//         Profile Image:
//         <input type="text" value={profileImage} onChange={handleProfileImageChange} />
//       </label>
//       <br />
//       <label>
//         Password:
//         <input type="password" value={password} onChange={handlePasswordChange} />
//       </label>
//       <br />
//       <button type="submit">Sign Up</button>
//     </form>
//   );
// }

// export default SignupPage;
