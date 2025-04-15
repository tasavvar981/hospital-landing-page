import React, { useState } from "react";

function Subscribe() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  return React.createElement(
    "section",
    { className: "subscribe-section" },
    React.createElement(
      "div",
      { className: "subscribe-box" },
      React.createElement("h2", null, "Subscribe to Newsletter"),
      React.createElement(
        "p",
        null,
        "We have a wide experience in experience design and strategy,"
      ),
      React.createElement(
        "form",
        { className: "subscribe-form", onSubmit: handleSubmit },
        React.createElement("input", {
          type: "email",
          placeholder: "Enter your email address",
          value: email,
          onChange: (e) => setEmail(e.target.value),
          required: true,
        }),
        React.createElement("button", { type: "submit" }, "Send Now")
      )
    )
  );
}

export default Subscribe;
