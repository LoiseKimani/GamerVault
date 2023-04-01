import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import Layout from './Layout';

function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/axios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => console.log(user));
      }
    });
  };

  return (
    <Layout>
      <Form className="my-4" onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Your name</Form.Label>
          <Form.Control
            type="text"
            placeholder="your name"
            required={true}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Your email</Form.Label>
          <Form.Control
            type="email"
            placeholder="email address"
            required={true}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Your password</Form.Label>
          <Form.Control
            type="password"
            required={true}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="remember">
          <Form.Check
            type="checkbox"
            label="Remember me"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </Layout>
  );
}

export default SignUpForm;
