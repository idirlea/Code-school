import React, { useState } from "react";

export default props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <div className="login-container">
        <form className="login-form">
          <input
            className="input-text"
            type="text"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            className="input-text"
            type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button className="button">Login</button>
        </form>
      </div>
    </div>
  );
};
