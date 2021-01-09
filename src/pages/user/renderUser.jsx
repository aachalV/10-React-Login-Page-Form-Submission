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
    // let { employee } = this.props;
    return (
      <div>
        <ParticlesBg num={60} type="lines" bg={true} />
        <h2>Welcome</h2>
        <h2>{this.props.location.state.email}</h2>
        <h2>You are registered</h2>
      </div>
    );
  }
}
// export default withRouter(RenderEmployeeCard);
export default User;
