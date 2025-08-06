
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import AutoAlert from './pages/AutoAlert'
import FrameAlert from './pages/FrameAlert'

function App() {
  

  return (
   <Router>
    <Routes>
      <Route path="/" element={<h1>Home Page</h1>} />
      <Route path="/auto-alert" element={<AutoAlert/>} />
      <Route path="/frame-alert" element={<FrameAlert/>} />
    </Routes>
   </Router>
  )
}

export default App
