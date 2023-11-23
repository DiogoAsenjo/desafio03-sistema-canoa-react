import { Navigate } from "react-router-dom";

export const Deadend = ({ children }) => {
  const token = sessionStorage.getItem("token");
  return token ? <>{children}</> : <Navigate to="/" />;
};
