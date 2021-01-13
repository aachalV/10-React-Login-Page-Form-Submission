// function User() {
//   return <div>User Registered</div>;
// }
// export default User;

//Employee Card component
//Employee Card will have Data from props

import { Component } from "react";
import ParticlesBg from "particles-bg";
import styles from "../user/renderUser.module.css";

class User extends Component {
  render() {
    console.log(this.props);
    return (
      <>
        {this.props.location.state !== undefined ? (
          <div>
            <ParticlesBg num={60} type="lines" bg={true} />
            <h2>Welcome</h2>
            <h2>{this.props.location.state.email}</h2>
            <h2>{this.props.location.state.successMessage}</h2>
          </div>
        ) : (
          <div>
            <h2 className={styles["errMsg"]}>Authentication needed...</h2>
            <p className={styles["errMsg"]}>
              if you are already Registered then try login
            </p>
            <p className={styles["errMsg"]}>Or you can simply Sigup</p>
          </div>
        )}
      </>
    );
  }
}
// export default withRouter(RenderEmployeeCard);
export default User;
