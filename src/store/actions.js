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
      data: { user: userInfo },
      // body: JSON.stringify({ user: userInfo }),
    })
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          history.push("/dashboard");
          res.data && dispatch({ type: isLogged, payload: true });
          res.data && localStorage.setItem("authToken", res.data.token);
          return dispatch({ type: userInfo, payload: res });
        } else {
          return dispatch({ type: error, payload: "Something went wrong!" });
        }
      })
      .catch((err) => console.log(err));
  };
}

export function handleAddBoard() {
  return function (dispatch) {
    if (localStorage.authToken) {
      fetch(url, {
        method: "POST",
        header: {
          "Content-Type": "application/json",
        },
        url,
        data: { boardInfo },
      })
        .then((res) => {
          if (res.status === 200) {
            console.log(res.data);
            history.push("/dashboard");
            return dispatch({ type: boardInfo, payload: res });
          } else {
            return dispatch({
              type: error,
              payload: "Check again! Board didn't created.",
            });
          }
        })
        .catch((err) => console.log(err));
    }
  };
}

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

export function handleSetting(url, userInfo, history) {
  return function (dispatch) {
    axios({
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      url,
      data: { user: userInfo },
    })
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          history.push("/dashboard");
          return dispatch({ type: userInfo, payload: res });
        } else {
          return dispatch({ type: error, payload: "Something went wrong!" });
        }
      })
      .catch((err) => console.log(err));
  };
}

export function handleBoardList(url, boardInfo) {
  return function (dispatch) {
    axios({
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      url,
      data: {
        board: boardInfo,
      },
    }).then((res) => {
      if (res.status === 200) {
        console.log(res.data);
        return dispatch({ type: boardInfo, payload: res });
      } else {
        return dispatch({ type: error, payload: "Something went wrong!" });
      }
    });
  };
}

// double check on the handle settings before proceeding
