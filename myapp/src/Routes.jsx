import { useRoutes } from "react-router-dom";
import App from "./App";
import Test from "./test";

function Routes() {
    return (useRoutes([
        { path: "/", element: <App /> },
        { path: "/test", element: <Test /> }
    ]))
}
export default Routes