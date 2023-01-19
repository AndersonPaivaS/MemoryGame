import { HashRouter, Routes, Route } from 'react-router-dom'

import Game from './components/Game'
import Login from './components/Login'
import './App.css'
import { MemoryGameProvider } from './context/MemoryGameContext'

function App() {

  return (
    <div className="App">
      <MemoryGameProvider>
        <HashRouter>

          <Routes>
              <Route path="/" element={<Login /> } />

              <Route path="/home" element={<Game />} />
          </Routes>

        </HashRouter>
      </MemoryGameProvider>
    </div>
  )
}

export default App
