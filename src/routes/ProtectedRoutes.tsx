import useAuthStore from "../store/useAuth";
import Login from "../components/Login";
import { Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const { user } = useAuthStore();
  const userLoggedIn = user?.email !== undefined;
  if (!userLoggedIn) {
    return <Login />;
  }
  return <Outlet />;
};

export default ProtectedRoutes;
