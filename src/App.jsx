import { Route, Routes } from 'react-router'
import Nav from './components/Nav'
import Home from './pages/Homepage'
import ProgramPg from './pages/ProgramPg' 
import CertPg from './pages/CertPg'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <>
    <div className='app'>
      <Nav/>
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/program/:id" element={<ProgramPg />} />
          <Route path="/program/:id/cert/:certid" element={<CertPg />}/>
        </Routes>
      </main>
      <Footer />
    </div>
    </>
  )
}

export default App
