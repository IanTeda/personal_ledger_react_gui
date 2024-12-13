import { NextUIProvider } from "@nextui-org/react";
import { NavigateOptions, RouterProvider } from "react-router";
import router from "./router";

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NavigateOptions;
  }
}

function App() {

  return (
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  );
}

export default App;
