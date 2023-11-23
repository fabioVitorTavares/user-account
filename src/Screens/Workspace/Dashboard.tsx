import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  function clickWorspace() {
    navigate("/workspace");
  }

  function clickSair() {
    localStorage.setItem("user", "not-Autheticated");
    navigate("/");
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={clickWorspace}>worspace</button>
      <button onClick={clickSair}>Sair</button>
    </div>
  );
}
