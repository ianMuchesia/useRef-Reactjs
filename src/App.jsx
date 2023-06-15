
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Input from './pages/Input'
import Images from './pages/Images'

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/input' element={<Input/>}/>
      <Route path='/images' element={<Images/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
