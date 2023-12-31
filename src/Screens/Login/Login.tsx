import {} from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function clickLogin() {
    localStorage.setItem("user", "authenticated");
    navigate("/workspace");
  }
  return (
    <div>
      <h1>Login</h1>
      <button onClick={clickLogin}>Login</button>
    </div>
  );
}
