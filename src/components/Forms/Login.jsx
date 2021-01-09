import { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../Header/Header";
import { sendDetailsToServer } from "../../helper/sendDetailsToServer";
function Login(props) {
  let history = useHistory(); //History Hook
  const [state, setState] = useState({
    email: "",
    password: "",
    successMessage: null,
  });
  const handleChange = (event) => {
    const { id, value } = event.target;
    setState((prevState) => ({ ...prevState, [id]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (state.email.length && state.password.length) {
      if (state.email.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")) {
        if (
          state.password.match(
            "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
          )
        ) {
          sendDetailsToServer(state, "/users/login").then((response) => {
            if (response.status === 200) {
              alert(response.status);
              setState((prevState) => ({
                ...prevState,
                successMessage: "Login Successfull",
              }));
              console.log(state.successMessage);
              history.push("/users/renderUser", state);
            }
          });
        } else {
          alert(
            "The password must be atleast 8 characters and should contain atleast one => uppercase alphabetical character , lowercase alphabetical character, numeric character,special character"
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
      <Header heading={"Login"} />
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
                Minimum 8 characters. Must include upppercase and lowercase
                alphabetical ,numerical and special characters
              </small>
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

export default Login;
