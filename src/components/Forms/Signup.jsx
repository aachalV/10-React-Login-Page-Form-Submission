import { useState } from "react";
import Header from "../Header/Header";

function Signup(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (event) => {
    const { id, value } = event.target;
    setState((prevState) => ({ ...prevState, [id]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (state.email.length) {
      if (state.password === state.confirmPassword) {
        //   sendDetailsToServer();
        console.log("Password matched");
      } else {
        //   props.showError("Password does not match");
        alert("Password does not match !!!");
      }
    } else {
      alert("Enter valid Email");
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
        </div>
      </div>
    </>
  );
}

export default Signup;
