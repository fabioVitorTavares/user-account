import { useNavigate } from "react-router-dom";

export default function Workspace() {
  const navigate = useNavigate();

  function clickDashBoard() {
    navigate("/dashboard");
  }

  function clickSair() {
    localStorage.setItem("user", "not-Autheticated");
    navigate("/");
  }

  return (
    <div>
      <h1>Workspace</h1>
      <button onClick={clickDashBoard}>dashBoard</button>
      <button onClick={clickSair}>Sair</button>
    </div>
  );
}
