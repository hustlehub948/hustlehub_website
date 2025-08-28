import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";

export default createBrowserRouter([
  { path: "/", element: <App />, children: [{ index: true, element: <Home /> }] },
]);
