import React, { useState } from "react";

export default function Form() {
  const [text, setText] = useState("");
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ text: false, email: false, password: false }); 

  const handleTextChange = (e) => {
    setText(e.target.value);
    setError({ ...error, text: false }); 
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError({ ...error, email: false });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError({ ...error, password: false }); 
  };

  const submitForm = (e) => {
    e.preventDefault(); 

    let newError = { text: false, email: false, password: false };

    if (text.length < 4) {
      newError.text = true;
    }

    if (!email.includes("@")) {
      newError.email = true;
    }


    if (password.length < 8) {
      newError.password = true;
    }

    setError(newError);

    if (!newError.text && !newError.email && !newError.password) {
      alert("Form submitted successfully!");
     setText("");
     setEmail("");
     setPassword("");
    }
  };

  return (
    <>
      <h1 className="heading">Form Validation Using React</h1>
      <form className="form" onSubmit={submitForm}>
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          placeholder="Enter Text"
        />
        {error.text && <span id="para" style={{ color: "red" }}>Text must be at least 5 characters long.</span>}

        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter Email"
        />
        {error.email && <span id="para" style={{ color: "red" }}>Email must contain "@" symbol.</span>}

        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter Password"
        />
        {error.password && <span id="para" style={{ color: "red" }}>Password must be at least 8 characters long.</span>}

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
