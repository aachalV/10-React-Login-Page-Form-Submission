function Signup(props) {
  return (
    <div className="card">
      <form action="">
        <div>
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" placeholder="Enter email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter password" />
        </div>
        <div>
          <label htmlFor="confirm-password">Confirm password</label>
          <input type="password" id="password" placeholder="Confirm password" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signup;
