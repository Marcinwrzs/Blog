import { Paths } from "components/pages/Pages";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const Logout: React.FC = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate(Paths.SignIn);
  };

  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Logout;
