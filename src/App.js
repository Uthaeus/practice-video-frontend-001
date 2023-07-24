import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./layouts/main-layout";
import HomePage from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
