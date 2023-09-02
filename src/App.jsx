import React from 'react'
import { useRoutes } from 'react-router-dom'
import Home from './pages/Home'
import Page from './pages/Page'

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/page",
      element: <Page />
    }
  ])

  return (
    <div>
      {routes}
    </div>
  )
}

export default App
