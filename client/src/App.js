import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavBar from './NavBar';
import Home from './Home';
import GameReview from './GameReview';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  function handleLogin() {
    setLoggedIn(true);
  }

  function handleLogout() {
    setLoggedIn(false);
  }

  return (
    <Router>
      <NavBar onLogout={handleLogout} />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/reviews" component={GameReview} />
          <Route exact path="/games" component={GameReview} />
          <Route exact path="/users" component={GameReview} />
          <Route exact path="/login">
            {loggedIn ? <Redirect to="/" /> : <Login onLogin={handleLogin} />}
          </Route>
          <Route component={NotFound} />
        </Switch>
      </Container>
    </Router>
  );
}

function NotFound() {
  return <h1>404 Not Found</h1>;
}

export default App;
