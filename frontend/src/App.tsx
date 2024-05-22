import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import HomePage from "./pages/HomePage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import FormPage from "./pages/FormPage.tsx";
import AdminPage from "./pages/AdminPage.tsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <NotFoundPage />
    },
    {
      path: "/form",
      element: <FormPage />,
      errorElement: <NotFoundPage />
    },
    {
      path: "/admin",
      element: <AdminPage />,
      errorElement: <AdminPage />
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
     </div>
  )
}

export default App
