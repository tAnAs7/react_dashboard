import React, { lazy } from 'react';

const Dashboard_v100_alpha_1 = lazy(() => import('../version/v1.0.0/alpha/Dashboard_1'));
const Dashboard_v100_alpha_2 = lazy(() => import('../version/v1.0.0/alpha/Dashboard_2'));

// Define the routes for each version
export const versionRoutes = [
  {
    version: "/v1.0.0/alpha-1",
    title: "Dashboard version 1.0.0 Alpha 1",
    label: "v1.0.0-alpha_1",
    pathDefault: "/dashboard",
    routes: [
      { path: "/dashboard", element: <Dashboard_v100_alpha_1 /> },
    ],
  },
  {
    version: "/v1.0.0/alpha-2",
    title: "Dashboard version 1.0.0 Alpha 2",
    label: "v1.0.0-alpha_2",
    pathDefault: "/dashboard",
    routes: [
      { path: "/dashboard", element: <Dashboard_v100_alpha_2 /> },
    ],
  }
];