import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function NavBar({ onLogout }) {
  function handleLogout() {
    fetch('/logout', {
      method: 'DELETE',
    }).then(() => onLogout());
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Gamer Vault</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/reviews">Reviews</Nav.Link>
        <Nav.Link href="/games">Games</Nav.Link>
        <Nav.Link href="/users">Users</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
