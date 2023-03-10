import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'

function App() {
  
  const [preview,setPreview] = useState(false)
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/page1' element={<Page1/>}/>
        <Route path='/page2' element={<Page2/>}/>
        <Route path='/page3' element={<Page3/>}/>
        <Route path='/' element={<Page2/>}/>

      </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App
