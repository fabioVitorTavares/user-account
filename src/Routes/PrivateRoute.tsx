import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TChildren } from "../Types/Types";

export default function PrivateRoute({ children }: TChildren) {
  const navigate = useNavigate();
  const userAuthenticated = localStorage.getItem("user") === "authenticated";

  useEffect(() => {
    if (!userAuthenticated) {
      navigate("/login");
    }
  }, [userAuthenticated, navigate]);

  return userAuthenticated && children;
}
