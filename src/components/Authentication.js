import React from "react";
import google from "../google.png";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useSelector, useDispatch } from "react-redux";
import { signin, username } from "../UserData";

import { app } from "../firebase-config";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithRedirect,
  getRedirectResult,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

function Authentication({ title }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const dispatch = useDispatch();

  function signinWithGoogle() {
    const auth = getAuth();
    signInWithRedirect(auth, provider);
  }

  React.useEffect(() => {
    const auth = getAuth();
    getRedirectResult(auth)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
        dispatch(signin(user.displayName));
        navigate("/todo");
        sessionStorage.setItem(
            "Auth Token",
            token
          );
        
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        
        const errorMessage = error.message;
        
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  },[]);

  const handleAction = (param) => {
    const authentication = getAuth();

    if (param === "Sign Up") {
      createUserWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate("/todo");
          sessionStorage.setItem(
            "Auth Token",
            response._tokenResponse.refreshToken
          );
        })
        .catch((error) => {
          if (error.code === "auth/invalid-email") {
            toast.error("Please check the Email");
          }
          if (error.code === "auth/email-already-in-use") {
            toast.error("User exist, please check the email");
          }
        });
    }
    if (param === "Login") {
      signInWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate("/todo");
          toast("Login successfull");
          sessionStorage.setItem(
            "Auth Token",
            response._tokenResponse.refreshToken
          );
        })
        .catch((error) => {
          if (error.code === "auth/wrong-password") {
            toast.error("Please check the Password");
          }
          if (error.code === "auth/user-not-found") {
            toast.error("Please check the Email");
          }
        });
    }
  };

  const guestLogin = () => {
    sessionStorage.setItem(
      "Auth Token",
      "Guest Token"
    );
    navigate("/todo");
    dispatch(signin("Guest"));
  }

  return (
    <section className="authentication">
      <div className="auth-container">
        <div className="auth-links">
          <NavLink
            to="/login"
            className={(navData) =>
              navData.isActive ? "is-active" : "auth-link"
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className={(navData) =>
              navData.isActive ? "is-active" : "auth-link"
            }
          >
            Signup
          </NavLink>
        </div>
        <div className="login">
          <form className="one-column-form">
            <label htmlFor="email">
              Email
              <input
                type="text"
                name="email"
                id="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label htmlFor="password">
              Password
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button onClick={() => handleAction(title)} type="button">
              {title}
            </button>
            <div className="social-login google" onClick={signinWithGoogle}>
              <img src={google} alt="" />
              <p>{title} with Google</p>
            </div>
            <div className="social-login guest" onClick={guestLogin}>
              <p>Login as guest</p>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}


export default Authentication;
