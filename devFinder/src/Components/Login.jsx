import React from "react";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex justify-center my-48">
      <div className="card bg-base-100 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <div>
            <fieldset className="fieldset form-control">
              <legend className="fieldset-legend">Email</legend>
              <input
                type="email"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset form-control">
              <legend className="fieldset-legend">Password</legend>
              <input
                type="password"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset>
          </div>
          <div className="card-actions justify-center m-2">
            <button className="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
