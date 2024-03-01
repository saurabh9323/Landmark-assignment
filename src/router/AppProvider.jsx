import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Setting from "../components/Setting.jsx";
import ErrorPage from "../components/ErrorPage.jsx";
import Landing from "../components/Landing.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Landing /> },
      { path: "/setting", element: <Setting /> },
    ],
    // Optionally, you can specify an error page for this route group:
    errorElement: <ErrorPage />,
  },
];

const AppProvider = createBrowserRouter(routes);

export default AppProvider;
