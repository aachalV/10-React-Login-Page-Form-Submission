import { API_BASE_URL } from "../constants/apiConstants";
const axios = require("axios");

// function sendDetailsToServer(props) {
//   console.log(props);
//   const payload = {
//     email: props.email,
//     password: props.password,
//   };
//   axios.post(API_BASE_URL + "/users/signup", payload).then((response) => {
//     if (response.status === 200) {
//       console.log(response.data);
//     } else {
//       throw Error(response.data);
//     }
//   });
// }
//export default sendDetailsToServer;

export const sendDetailsToServer = (data, path) => {
  const payload = {
    email: data.email,
    password: data.password,
  };
  let response = axios.post(API_BASE_URL + path, payload);
  return response;
};
