import { RouteObject } from "react-router-dom"
import { lazy } from "react"

const routeConfig: RouteObject[] = [
  {
    path: "/",
    // Component: lazy(() => import("../layouts/basicLayout")),
    children: [
      {
        path: "/",
        Component: lazy(() => import("./pages/Authentication")),
      },
    ],
  },
  {
    path: "*",
    Component: lazy(() => import("./pages/NotFound")),
  },
]

export default routeConfig
