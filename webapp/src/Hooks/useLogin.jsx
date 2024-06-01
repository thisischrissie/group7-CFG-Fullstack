import axios from "axios";
import { useState } from "react";

export const useLogin = () => {
  const [error, setError] = useState(false);

  const login = async (email, password) => {
    axios
      .post("http://localhost:3001/user/login", {
        email: email,
        password: password,
      })
      .then(() => {
        //TODO: add redux
      })
      .catch(() => {
        setError(true);
      });
  };

  return { error, login };
};
