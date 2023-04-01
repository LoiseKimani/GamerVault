import React from "react";
import { Navbar } from "flowbite-react";
import { Button } from "flowbite-react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand as={NavLink} to="/">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Your Game App Saver
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button>Log out</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link as={NavLink} to="/home" exact>
            Home
          </Navbar.Link>
          <Navbar.Link as={NavLink} to="/newreview">
            Add Review
          </Navbar.Link>
          <Navbar.Link as={NavLink} to="/reviews">
            All Reviews
          </Navbar.Link>
          <Navbar.Link as={NavLink} to="/user/reviews">
            My Reviews
          </Navbar.Link>
          {/* <Navbar.Link as={NavLink} to="/aboutus">About Us</Navbar.Link> */}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
