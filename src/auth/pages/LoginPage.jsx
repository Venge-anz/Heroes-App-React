import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = () => {
    const lastPath = localStorage.getItem("lastPath") || "/";

    login("Claudia");

    setTimeout(() => {
      navigate(lastPath, {
        replace: true,
      });
    }, 100);
  };

  return (
    <div className="container m-t5">
      <h1>Login</h1>
      <hr />

      <button onClick={onLogin} className="btn btn-primary">
        Login
      </button>
    </div>
  );
};
