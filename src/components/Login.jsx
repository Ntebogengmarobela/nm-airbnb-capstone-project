import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>

        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button type="submit" className="login-btn">
            Continue
          </button>
        </form>

        <div className="or-separator">or</div>
        <button className="continue-btn">
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{ display: "block", height: "20px", width: "20px" }}
          >
            <g fill="none">
              <path
                d="m30.7 16.340875c0-1.0635937-.0954375-2.0863125-.2727187-3.06825h-14.1272813v5.8022813h8.0727188c-.3477188 1.8749999-1.4044688 3.4636874-2.9931563 4.527375v3.7635937h4.8477188c2.8364062-2.6113125 4.4727187-6.4568438 4.4727187-11.025z"
                fill="#4285f4"
              ></path>
              <path
                d="m16.3 31c4.05 0 7.4454375-1.34325 9.9271875-3.6340312l-4.8477187-3.7635938c-1.3430626.9-3.0613126 1.43175-5.0794688 1.43175-3.9068438 0-7.21363125-2.6386875-8.39323125-6.184125h-5.01135v3.8864063c2.46825 4.9022812 7.54094995 8.2635937 13.40458125 8.2635937z"
                fill="#34a853"
              ></path>
              <path
                d="m7.90675 18.8499062c-.3-.9-.4704-1.8613125-.4704-2.85s.1704-1.95.4704-2.85v-3.88635933h-5.01135c-1.0158 2.02504693-1.5954 4.31592183-1.5954 6.73635933 0 2.4204376.5796 4.7113126 1.5954 6.7363125z"
                fill="#fbbc04"
              ></path>
              <path
                d="m16.3 6.96595c2.2021875 0 4.1794688.75675 5.7340313 2.2431l4.3023749-4.3023c-2.5977187-2.4204-5.9932499-3.90675-10.0364062-3.90675-5.8636313 0-10.93633125 3.36135-13.40458125 8.26365l5.01135 3.88635c1.1796-3.5454 4.48638745-6.18405 8.39323125-6.18405z"
                fill="#e94235"
              ></path>
            </g>
          </svg>
          <span>Continue with Google</span>
        </button>
        <button className="continue-btn">
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            role="presentation"
            aria-hidden="true"
            focusable="false"
            style={{
              height: "20px",
              width: "20px",
              display: "block",
              fill: "currentcolor",
            }}
          >
            <path d="m13.3 2.1a5.1 5.1 0 0 1 3.8-2.1 5.1 5.1 0 0 1 -1.2 3.8 4.1 4.1 0 0 1 -3.6 1.7 4.5 4.5 0 0 1 1-3.4zm-5 3.7c-2.8 0-5.8 2.5-5.8 7.3 0 4.9 3.5 10.9 6.3 10.9 1 0 2.5-1 4-1s2.6.9 4 .9c3.1 0 5.3-6.4 5.3-6.4a5.3 5.3 0 0 1 -3.2-4.9 5.2 5.2 0 0 1 2.6-4.5 5.4 5.4 0 0 0 -4.7-2.4c-2 0-3.5 1.1-4.3 1.1-.9 0-2.4-1-4.2-1z"></path>
          </svg>
          <span>Continue with Apple</span>
        </button>
        <button className="continue-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: "block",
              height: "20px",
              width: "20px",
              fill: "currentcolor",
            }}
          >
            <path d="M30.51 5.88A5.06 5.06 0 0 0 26 3H6a5.06 5.06 0 0 0-4.51 2.88A4.94 4.94 0 0 0 1 8v16a5 5 0 0 0 5 5h20a5 5 0 0 0 5-5V8a4.94 4.94 0 0 0-.49-2.12ZM6 5h20a2.97 2.97 0 0 1 1.77.6L17.95 14a2.98 2.98 0 0 1-3.9 0L4.23 5.6A2.97 2.97 0 0 1 6 5Zm23 19a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a2.97 2.97 0 0 1 .1-.74l9.65 8.27a4.97 4.97 0 0 0 6.5 0l9.65-8.27A2.97 2.97 0 0 1 29 8Z"></path>
          </svg>
          <span>Continue with Email</span>
        </button>
        <button className="continue-btn">
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{ display: "block", height: "20px", width: "20px" }}
          >
            <g fill="none" fill-rule="nonzero">
              <path
                d="m31.9361277 15.9680639c0-8.81884234-7.1492215-15.9680639-15.9680638-15.9680639-8.81884234 0-15.9680639 7.14922156-15.9680639 15.9680639 0 7.4883832 5.15576846 13.7721357 12.1108184 15.497964v-10.6181237h-3.29261481v-4.8798403h3.29261481v-2.1026747c0-5.4348902 2.4597205-7.95401195 7.7956087-7.95401195 1.0117366 0 2.7573653.19864271 3.4714571.3966467v4.42315365c-.3768463-.0396008-1.0315369-.0594012-1.8446307-.0594012-2.6181238 0-3.6298603.9919362-3.6298603 3.5704591v1.7258284h5.2158084l-.8961277 4.8798403h-4.3196807v10.9713373c7.9067465-.9548902 14.0333733-7.6870259 14.0333733-15.8511776z"
                fill="#0866ff"
              ></path>
              <path
                d="m22.2224351 20.8479042.8961278-4.8798403h-5.2158084v-1.7258284c0-2.5785229 1.0117365-3.5704591 3.6298603-3.5704591.8130938 0 1.4677844.0198004 1.8446307.0594012v-4.42315365c-.7140918-.19864271-2.4597205-.3966467-3.4714571-.3966467-5.3358882 0-7.7956088 2.51912175-7.7956088 7.95401195v2.1026747h-3.29261473v4.8798403h3.29261473v10.6181237c1.2352895.3065869 2.5274252.4700998 3.8572455.4700998.6546907 0 1.3004392-.0402395 1.9346907-.1168862v-10.9713373h4.3196806z"
                fill="#fff"
              ></path>
            </g>
          </svg>
          <span>Continue with Facebook</span>
        </button>
        <p className="login-footer">
          Don’t have an account? <span className="signup-link">Sign up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
