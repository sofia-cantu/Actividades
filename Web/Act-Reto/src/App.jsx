import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Abuelitos from './components/Abuelitos';
import Funcional from './components/Funcional';
import Social from './components/Social';
import Cognitiva from './components/Cognitiva';
import Fisica from './components/Fisica';
import Afectiva from './components/Afectiva';
import SarcF from './components/tests/PruebasFisicas/SarcF';
import SSPB from './components/tests/PruebasFisicas/SSPB';
import CircPantorilla from './components/tests/PruebasFisicas/CircPantorilla';
import UpandGo from './components/tests/PruebasFisicas/UpandGo';
import Frail from './components/tests/PruebasFisicas/Frail';
import Fuerza from './components/tests/PruebasFisicas/Fuerza';
import Lawton from './components/tests/PruebasFuncionales/Lawton';
import Katz from './components/tests/PruebasFuncionales/Katz';
import Gijon from './components/tests/PruebasSociales/Gijon';
import MMSE from './components/tests/PruebasCognitivas/MMSE';
import Reloj from './components/tests/PruebasCognitivas/Reloj';
import GDS from './components/tests/PruebasAfectivas/GDS';
import Persona from './components/Persona';
import Pam from './components/Pam';
import Busqueda from './components/Busqueda';
import ResultadoPam from './components/ResultadoPam';
import Signin from './components/Signin';
import MiPerfil from './components/MiPerfil';
import WebGLComponent from  './components/Videojuegos';
import NewTest from './components/NewTest';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Abuelitos />} />
          <Route path="/funcional" element={<Funcional />} />
          <Route path="/social" element={<Social />} />
          <Route path="/cognitiva" element={<Cognitiva />} />
          <Route path="/fisica" element={<Fisica />} />
          <Route path="/afectiva" element={<Afectiva />} />
          <Route path="/SarcF" element={<SarcF />} />
          <Route path="/SSPB" element={<SSPB />} />
          <Route path="/CircPantorilla" element={<CircPantorilla />} />
          <Route path="/UpandGo" element={<UpandGo />} />
          <Route path="/Frail" element={<Frail />} />
          <Route path="/Fuerza" element={<Fuerza />} />
          <Route path="/Lawton" element={<Lawton />} />
          <Route path="/Katz" element={<Katz />} />
          <Route path="/Gijon" element={<Gijon />} />
          <Route path="/MMSE" element={<MMSE />} />
          <Route path="/Reloj" element={<Reloj />} />
          <Route path="/GDS" element={<GDS />} />
          <Route path="/RegistroPersona" element={<Persona />} />
          <Route path="/RegistroPam" element={<Pam />} />
          <Route path="/Busqueda" element={<Busqueda />}/>
          <Route path="/ResultadoPam/:pam_id" element={<ResultadoPam />} />
          <Route path="/miperfil" element={<MiPerfil />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/videojuegos" element={<WebGLComponent />} />
          <Route path="/newTest" element={<NewTest />} />

        </Routes>

 
      </BrowserRouter>
    </div>
  );
}

export default App;