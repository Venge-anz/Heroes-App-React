import { useNavigate } from "react-router";

export const LoginPage = () => {
  const navigate = useNavigate();

  const onLogin = () => {
    navigate("/", { replace: true });
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
