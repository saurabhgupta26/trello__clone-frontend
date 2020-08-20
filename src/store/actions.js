import { userInfo, isLogged, error } from "./types";
import axios from "axios";

export function handleSignin(url, userInfo, history) {
  return function (dispatch) {
    axios({
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      url,
      data: { user: this.state },
      body: JSON.stringify({ user: userInfo }),
    })
      .then((res) => {
        if (res.status === 200) {
          history.push("/dashboard");
        } else {
          return dispatch({ type: error, payload: "Something went wrong!" });
        }
        return res.json();
      })
      .then(({ user }) => {
        console.log(user, "reached in the actions of log in ****************");
        user && dispatch({ type: isLogged, payload: true });
        user && localStorage.setItem("authToken", user.token);
        return dispatch({ type: userInfo, payload: user });
      });
  }
  .catch((err) => console.log(err));
}
// ****** //
//   fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ user: userInfo }),
//   })
//     .then((res) => {
//       if (res.status === 200) {
//         history.push("/dashboard");
//       } else {
//         return dispatch({ type: error, payload: "Something went wrong!" });
//       }
//       return res.json();
//     })
//     .then(({ user }) => {
//       console.log(user, "reached in the actions of log in ****************");
//       user && dispatch({ type: isLogged, payload: true });
//       user && localStorage.setItem("authToken", user.token);
//       return dispatch({ type: userInfo, payload: user });
//     });
// }

export function checkUser(url) {
  return function (dispatch) {
    if (localStorage.authToken) {
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Token ${localStorage.authToken}`,
        },
      })
        .then((res) => res.json())
        .then((user) => {
          dispatch({ type: isLogged, payload: true });
          return dispatch({ type: userInfo, payload: user.user });
        })
        .catch((err) => dispatch({ type: userInfo, payload: null }));
      console.log("EDIT");
    }
  };
}
