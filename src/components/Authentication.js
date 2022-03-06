import React from "react";
import google from '../google.png'

function Authentication() {
  const [state, setState] = React.useState("login");

  function login() {
    setState((prev) => (prev = "login"));
  }

  function signup() {
    setState((prev) => (prev = "signup"));
  }

  const loginActive = state === "login" ? {backgroundColor: "#fdc049"} : {backgroundColor: "unset"};
  const signupActive = state === "signup" ? {backgroundColor: "#fdc049"} : {backgroundColor: "unset"};

  return (
    <section className="authentication">
      <div className="auth-container">
        <div className="auth-links">
          <button className="auth-link" onClick={login} style={loginActive}>
            Login
          </button>
          <button className="auth-link" onClick={signup} style={signupActive}>
            Signup
          </button>
        </div>
        {state === "login" && <LoginForm />}
        {state === "signup" && <SignupForm />}
      </div>
    </section>
  );
}

function LoginForm() {
  return (
    <div className="login">
      <form className="one-column-form">
        <label htmlFor="email">
          Email
          <input type="text" name="email" id="email" placeholder="email" />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
        </label>
        <button>Login</button>
        <div className="social-login google">
          <img src={google} alt="" /><p>Login with Google</p>
        </div>
        <div className="social-login facebook">
          <i className="fa-brands fa-facebook-square"></i>
          <p>Login with Facebook</p>
        </div>
      </form>
    </div>
  );
}

function SignupForm() {
  return (
    <div className="signup">
      <form className="one-column-form">
        <label htmlFor="email">
          Email
          <input type="text" name="email" id="email" placeholder="email" />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
        </label>
        <button>Signup</button>
        <div className="social-login google">
          <img src={google} alt="" /><p>Sign up with Google</p>
        </div>
        <div className="social-login facebook">
          <i className="fa-brands fa-facebook-square"></i>
          <p>Sign up with Facebook</p>
        </div>
      </form>
    </div>
  );
}

export default Authentication;
