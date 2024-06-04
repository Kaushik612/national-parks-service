import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./layout/Root";

const newRouter = createBrowserRouter([{ path: "*", Component: Root }]);

export default function App() {
  return <RouterProvider router={newRouter} />;
}
