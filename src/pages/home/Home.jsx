import "../home/Home.css";
import ParticlesBg from "particles-bg";
import { useHistory } from "react-router-dom";

function Home() {
  let history = useHistory(); //History Hook
  const directToSignUp = (event) => {
    history.push("/users/signup");
  };

  const directToLogin = (event) => {};
  return (
    <div>
      <header id="home">
        <div className="row banner">
          <ParticlesBg num={60} type="lines" bg={true} />
          <div className="banner-text">
            <div className="headbody">
              <h1 className="responsive-headline">Welcome</h1>
              <hr />

              <button onClick={directToSignUp} className="button-raw">
                Sigup
              </button>
              <button onClick={directToLogin} className="button-surfboard">
                Login
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
