import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import GamePage from "../pages/GamePage";
import LayoutPage from "../pages/LayoutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "games/:id",
        element: <GamePage />,
      },
    ],
  },
]);

export default router;
