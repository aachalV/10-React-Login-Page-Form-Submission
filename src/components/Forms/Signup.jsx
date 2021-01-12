import { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../Header/Header";
import { sendDetailsToServer } from "../../helper/sendDetailsToServer";
function Signup(props) {
  let history = useHistory(); //History Hook
  const [state, setState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    successMessage: "",
  });
  const handleChange = (event) => {
    const { id, value } = event.target;
    setState({ ...state, [id]: value });

    // const { id, value } = event.target;
    // setState((prevState) => ({ ...prevState, [id]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      state.email.length &&
      state.password.length &&
      state.confirmPassword.length
    ) {
      if (state.email.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")) {
        if (
          state.password.match(
            "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
          )
        ) {
          if (state.password === state.confirmPassword) {
            sendDetailsToServer(state, "/users/signup").then((response) => {
              if (
                response.status === 200 &&
                response.data !== "User already registered"
              ) {
                setState({ ...state, successMessage: "Successfull" });
                history.push("/users/renderUser", state);
              } else if (
                response.status === 200 &&
                response.data === "User already registered"
              ) {
                setState({ ...state, successMessage: "Unsuccessfull" });
                console.log(state.successMessage);
              }
            });
          } else {
            alert("Password does not match !!!");
          }
        } else {
          alert(
            "The password must be atleast 6 characters and should contain atleast one => uppercase alphabetical character , lowercase alphabetical character, numeric character,special character"
          );
        }
      } else {
        alert("Enter valid Email");
      }
    } else {
      alert("Enter valid inputs!");
    }
  };
  return (
    <>
      <Header heading={"Signup"} />
      <div className="d-flex justify-content-center">
        <div className="card col-12 col-lg-4 login-card my-5 ">
          <form className="my-3">
            <div className="form-group text-left">
              <label htmlFor="email">Username</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter your email"
                value={state.email}
                onChange={handleChange}
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group text-left">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={state.password}
                onChange={handleChange}
              />
              <small id="passwordHelp" className="form-text text-muted">
                Minimum 6 characters. Must include upppercase and lowercase
                alphabetical ,numerical and special characters
              </small>
            </div>
            <div className="form-group text-left">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                placeholder="Confirm Password"
                value={state.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
          <div
            className="alert alert-success mt-2"
            style={{
              display:
                state.successMessage === "Unsuccessfull" ? "block" : "none",
            }}
            role="alert"
          >
            {state.successMessage}
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
