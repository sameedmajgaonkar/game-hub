import { createBrowserRouter } from "react-router";
import Layout from "./pages/Layout";
import GameDetailsPage from "./pages/GameDetailsPage";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:id", element: <GameDetailsPage /> },
    ],
  },
]);

export default router;
