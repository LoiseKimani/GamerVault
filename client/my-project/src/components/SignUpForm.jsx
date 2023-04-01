import React, { useState } from "react";
import { Form, FloatingLabel, Button } from "react-bootstrap";

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
    <Form className="my-4" onSubmit={handleSubmit}>
      <FloatingLabel controlId="name" label="Your name">
        <Form.Control
          type="text"
          placeholder="your name"
          required={true}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FloatingLabel>
      <FloatingLabel controlId="email" label="Your email">
        <Form.Control
          type="email"
          placeholder="email address"
          required={true}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FloatingLabel>
      <FloatingLabel controlId="password" label="Your password">
        <Form.Control
          type="password"
          required={true}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FloatingLabel>
      <Form.Check
        id="remember"
        label="Remember me"
        checked={remember}
        onChange={(e) => setRemember(e.target.checked)}
      />
      <Button variant="primary" type="submit">Submit</Button>
    </Form>
  );
}

export default SignUpForm;
