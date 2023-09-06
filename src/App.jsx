import React from 'react'
import { useRoutes } from 'react-router-dom'
import Home from './pages/Home'
import Happy from './pages/Happy'
// import Calm from './pages/Calm'
// import Sad from './pages/Sad'
// import Adventurous from './pages/Adventurous'
// import Energized from './pages/Energized'
// import InLove from './pages/InLove'

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/:titleMood/:playlistID",
      element: <Happy />
    }
  ])

  return (
    <div>
      {routes}
    </div>
  )
}

export default App
