import { Routes, Route } from 'react-router-dom'
import { DefaultLayou } from './layouts/DefaultLayout' /* header */

import { Home } from './pages/Home'
import { History } from './pages/History'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayou />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
