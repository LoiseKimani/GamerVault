import React from 'react';

function Navbar({ onLogout }) {
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  return (
    <header>
      <button onClick={handleLogout}>Logout</button>
    </header>
  );
}

export default Navbar;

// import React from 'react';
// import { Navbar, Container, Nav } from 'react-bootstrap';

// function MyNavigation() {
//   return (
//     <Navbar bg="dark" variant="dark">
//       <Container>
//         <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//         <Nav className="me-auto">
//           <Nav.Link href="#home">Home</Nav.Link>
//           <Nav.Link href="#features">Features</Nav.Link>
//           <Nav.Link href="#pricing">Pricing</Nav.Link>
//         </Nav>
//       </Container>
//     </Navbar>
//   );
// }

// export default MyNavigation;
