import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Layout from "./Pages/Layout/Layout.jsx"
import Records from "./Pages/Modules/Records.jsx"

function App() {
  // initialize a browser router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
    },
    {
      path: "/Records",
      element: <Records />,
    },
    {
      path: "/",
      element: <Layout />,
    },
  ])
  return (
      <RouterProvider router={router} />
  )
}

export default App