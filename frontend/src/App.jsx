import { useState } from 'react'
import DefendiaPage from './pages/DefendiaPage.jsx'
import Navigation from './components/Navigation.jsx'
import Footer from './components/Footer.jsx'
import ReadPage from './pages/ReadPage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation />
      {/* <DefendiaPage /> */}
      <ReadPage/>
      <Footer/>
    </>
  )
}

export default App
