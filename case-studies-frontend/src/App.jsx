import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CaseStudy from './pages/CaseStudy';
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study/:slug" element={<CaseStudy />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
