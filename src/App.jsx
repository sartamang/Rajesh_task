
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Page/Home'
import Program from './Page/Program'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/program" element={<Program />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
