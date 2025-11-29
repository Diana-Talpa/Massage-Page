import './App.css'
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage'
import { BrowserRouter } from 'react-router-dom';
import Licencija from './pages/Licencija/Licencija';
import GydomasisMasazas from './pages/GydomasisMasazas/GydomasisMasazas';
import Straipsniai from './pages/Straipsniai/Straipsniai';
import Kainorastis from './pages/Kainorastis/Kainorastis';
import DUK from './pages/DUK/DUK';
import Kontaktai from './pages/Kontaktai/Kontaktai';
import Header from './components/Header/Header';

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />    
        <Route path="/licencija" element={<Licencija/>} />    
        <Route path="/gydomasismasazas" element={<GydomasisMasazas/>} />    
        <Route path="/straipsniai" element={<Straipsniai/>} />    
        <Route path="/kainorastis" element={<Kainorastis/>} />    
        <Route path="/duk" element={<DUK/>} />    
        <Route path="/kontaktai" element={<Kontaktai/>} />    
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
