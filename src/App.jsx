import Header from "./components/Header"
import { createBrowserRouter, ScrollRestoration, Outlet, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import LogIn from "./pages/LogIn"
import Register from "./pages/Register"

function App() {

  const Layout = () => {
    return (
      <div>
        <Header />
        <ScrollRestoration />
        <Outlet />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: 'login',
          element: <LogIn />
        },
        {
          path: '/register',
          element: <Register />
        }
      ]
    }
  ])

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App