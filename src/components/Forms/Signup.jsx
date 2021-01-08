import { useState } from "react";
import Header from "../Header/Header";
import { sendDetailsToServer } from "../../helper/sendDetailsToServer";
function Signup(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    successMessage: null,
  });
  const handleChange = (event) => {
    const { id, value } = event.target;
    setState((prevState) => ({ ...prevState, [id]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (state.email.length && state.password.length) {
      if (state.password === state.confirmPassword) {
        console.log("Password matched");
        sendDetailsToServer(state, "/users/signup").then((response) => {
          if (response.status === 200) {
            alert(response.data);
            setState((prevState) => ({
              ...prevState,
              successMessage: "Registration Successful",
            }));
          }
        });
      } else {
        alert("Password does not match !!!");
      }
    } else {
      alert("Enter valid Inputs");
    }
  };
  return (
    <>
      <Header heading={"Signup"} />
      <div className="d-flex justify-content-center">
        <div className="card col-12 col-lg-4 login-card my-5 ">
          <form className="my-3">
            <div className="form-group text-left">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
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
          {/* <div
            className="alert alert-success mt-2"
            style={{ display: state.successMessage ? "block" : "none" }}
            role="alert"
          >
            {state.successMessage}
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Signup;
