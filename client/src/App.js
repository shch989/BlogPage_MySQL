import React, { Fragment } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from 'react-router-dom'
// pages
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import Single from './pages/Single'
import Write from './pages/Write'
//components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import './style.scss'

const Layout = () => {
  return (
    <Fragment>
      <Navbar />
      <Outlet />
      <Footer />
    </Fragment>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/post/:id',
        element: <Single />,
      },
      {
        path: '/write',
        element: <Write />,
      },
    ],
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
])

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App
