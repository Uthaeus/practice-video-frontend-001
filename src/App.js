import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./layouts/main-layout";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/about",
        element: <AboutPage />
      },
      {
        path: "/contact",
        element: <ContactPage />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
