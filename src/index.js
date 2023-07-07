//React
import React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  useLoaderData
} from "react-router-dom";

import App from "./App";
import ErrorPage from "./ErrorPage"

import PodList from "./components/PodList/Podlist";
import podListLoader from "./components/PodList/podListLoader";

import PodItemView from "./components/PodItemView/PodItemView";
import podItemLoader from "./components/PodItemView/PodItemLoader";

import PodEpiView from "./components/PodEpiView/PodEpiView";
import podEpiLoader from "./components/PodEpiView/PodEpiLoader";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true,
        element: <PodList />,
        loader: podListLoader,
      },
      {
        path: "/podcast/:podcastId",
        element: <PodItemView />,
        loader: podItemLoader,
      },
      {
        path: "/podcast/:podcastId/episode/:episodeId",
        element: <PodEpiView />,
        loader: podEpiLoader,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
