import { createBrowserRouter } from "react-router-dom";

import Events from "../pages/Events";
import SelectedEvent from "../pages/SelectedEvent";
import Confirmation from "../pages/Confirmation";

function isProduction() {
  console.log(import.meta.env);

  if (import.meta.env.PROD) return { basename: import.meta.env.BASE_URL };
  else return {};
}

const router = createBrowserRouter(
  [
    {
      path: "/", // / är startsidan
      element: <Events />,
    },
    {
      path: "/event",
      element: <SelectedEvent />,
    },
    {
      path: "/confirmation",
      element: <Confirmation />,
    },
  ],
  isProduction()
);

export default router;
