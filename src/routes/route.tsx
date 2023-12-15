import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import GamePage from "../pages/GamePage";
import LayoutPage from "../pages/LayoutPage";
import ErrorPage from "../pages/ErrorPage";
import ProtectedRoutes from "./ProtectedRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <ProtectedRoutes />,
        children: [
          {
            path: "home",
            element: <HomePage />,
          },
          {
            path: "games/:slugOrId",
            element: <GamePage />,
          },
        ],
      },
    ],
  },
]);

export default router;
