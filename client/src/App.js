import React, { useState, useEffect } from 'react';
// import MyNavbar from './NavBar';
import Home from './Home';
import Login from './Login';
import Form from './Form';
// import SignUp from './SignUp';
import Content from './Content';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (user) {
    return (
      <div>
        {/* <MyNavbar /> */}
        <Content>
          <Home />
          <Form />
        </Content>
      </div>
    );
  } else {
    return <Login onLogin={setUser} />;
  }
}

export default App;
