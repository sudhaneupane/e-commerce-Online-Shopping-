import React from "react";

const Login = () => {
  return (
    <div>
      <div>
        <h1>Admin Panel</h1>
        <form>
          <div>
            <p>Email Address</p>
            <input type="email" placeholder="your@email.com" required />
          </div>
          <div>
            <p>Password</p>
            <input type="password" placeholder="Enter your password" required />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
