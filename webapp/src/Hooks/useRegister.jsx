import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/userSlice";

export const useRegister = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);

  const signup = async (username, email, password) => {
    await axios
      .post("http://localhost:3001/user/register", {
        email: email,
        password: password,
        name: username,
      })
      .then(() => {
        const userInfo = { email: email, password: password };
        dispatch(register(userInfo));
      })
      .catch((e) => {
        console.error(e);
        setError(true);
      });
  };

  return { error, signup };
};
