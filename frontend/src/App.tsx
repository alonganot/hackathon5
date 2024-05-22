import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import FormPage from "./pages/FormPage.tsx";
import AdminPage from "./pages/AdminPage.tsx";
import EventsPage from "./pages/EventsPage.tsx";
import TeamPage from "./pages/TeamPage.tsx";
import GalleryPage from "./pages/GalleryPage.tsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <NotFoundPage />
    },
    {
      path: "/form/:purpose",
      element: <FormPage />,
      errorElement: <NotFoundPage />
    },
    {
      path: "/admin",
      element: <AdminPage />,
      errorElement: <AdminPage />
    },
    {
      path: "/events",
      element: <EventsPage />,
      errorElement: <NotFoundPage />
    },
    {
      path: "/team",
      element: <TeamPage />,
      errorElement: <NotFoundPage />
    },
    {
      path: "/gallery",
      element: <GalleryPage />,
      errorElement: <AdminPage />
    },
  ]);

  return (
    <div style={{direction: 'rtl'}}>
      <RouterProvider router={router} />
     </div>
  )
}

export default App
