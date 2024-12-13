import { NavigateOptions, RouterProvider } from "react-router";
import { NextUIProvider } from "@nextui-org/react";
import routes from "./routes";

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NavigateOptions;
  }
}

function App() {
  // const navigate = useNavigate();
  
  return (
    <NextUIProvider>
      <RouterProvider router={routes} />
    </NextUIProvider>
  );
}

export default App;
