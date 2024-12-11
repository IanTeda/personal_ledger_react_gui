//-- ./src/router.tsx

// https://reactrouter.com/start/framework/custom
// https://www.freecodecamp.org/news/a-complete-beginners-guide-to-react-router-include-router-hooks/
// https://ui.dev/react-router-tutorial

import { createBrowserRouter } from "react-router";

import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import CategoriesPage from "./pages/CategoriesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/categories",
    element: <CategoriesPage />,
    errorElement: <NotFoundPage />,
  },
]);

export default router;
