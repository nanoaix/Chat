import React, { Suspense } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import routeConfig from "./router"

const router = createBrowserRouter(routeConfig)

const App: React.FC = () => {
  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App
