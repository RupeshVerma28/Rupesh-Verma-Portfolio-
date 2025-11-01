import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Home from './pages/Home.jsx'
import Achievements from './pages/Achievements.jsx'
import Certificates from './pages/Certificates.jsx'
import Projects from './pages/Projects.jsx'
import Loading from './components/Loading.jsx'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Minimum loading time for smooth UX (ensures loading screen is visible)
    const minLoadingTime = 1200
    const startTime = Date.now()

    const handleLoad = () => {
      const elapsed = Date.now() - startTime
      const remainingTime = Math.max(0, minLoadingTime - elapsed)
      
      setTimeout(() => {
        setLoading(false)
      }, remainingTime + 300) // Small delay for smooth fade-out
    }

    // Check if page is already loaded
    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }

    // Fallback: hide loading after max 2.5 seconds regardless
    const maxTimer = setTimeout(() => {
      setLoading(false)
    }, 2500)

    return () => {
      clearTimeout(maxTimer)
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  )
}

export default App
