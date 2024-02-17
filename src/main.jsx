import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import JobDetails from "./Components/JobDetails/JobDetails";
import AppliedJobs from "./Components/AppliedJobs/AppliedJobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'applied',
        element: <AppliedJobs />,
        loader: () => fetch('/data/jobs.json') // WARNING: future, do not all loading using loader
      },
      {
        path: '/job/:id',
        element: <JobDetails />,
        loader: ()=> fetch('/data/jobs.json') // don't load all data. load only what will you need
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);