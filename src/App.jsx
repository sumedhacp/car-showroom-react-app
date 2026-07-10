import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddCar from './components/AddCar'
import DeleteCar from './components/DeleteCar'
import SearchCar from './components/SearchCar'
import ViewCar from './components/ViewCar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <BrowserRouter>

        <Routes>

          <Route path='/' element={<AddCar />} />
          <Route path='/search' element={<SearchCar />} />
          <Route path='/delete' element={<DeleteCar />} />
          <Route path='/view' element={<ViewCar />} />


        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
