function Header(props) {
  return (
    <nav className="navbar navbar-dark bg-secondary">
      <div className="row col-12 d-flex justify-content-center text-white">
        <span className="h3">{props.heading}</span>
      </div>
    </nav>
  );
}
export default Header;
