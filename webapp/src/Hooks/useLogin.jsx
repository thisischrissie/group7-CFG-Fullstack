import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";

export const useLogin = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);

  const signin = async (email, password) => {
    axios
      .post("http://localhost:3001/user/login", {
        email: email,
        password: password,
      })
      .then(() => {
        const userInfo = { email: email, password: password };
        dispatch(login(JSON.stringify(userInfo)));

        console.log("success");
      })
      .catch((e) => {
        console.error(e);
        setError(true);
      });
  };

  return { error, signin };
};
