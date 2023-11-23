import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  function clickLogin() {
    navigate("/login");
  }

  function clickRegister() {
    navigate("/register");
  }

  return (
    <div>
      <h1>Home</h1>
      <button onClick={clickLogin}>Login</button>
      <button onClick={clickRegister}>Registe</button>
    </div>
  );
}
