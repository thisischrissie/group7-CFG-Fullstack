import axios from "axios";
import { useState } from "react";

export const useRegister = () => {
  const [error, setError] = useState(false);

  const register = async (username, email, password) => {
    await axios
      .post("http://localhost:3001/user/register", {
        email: email,
        password: password,
        name: username,
      })
      .then(() => {
        //TODO: add redux
      })
      .catch((e) => {
        console.error(e);
        setError(true);
      });
  };

  return { error, register };
};
