import './App.css';
import NavBar from './components/NavBar';
import Profile from './pages/profile/Profile';
import Classes from './pages/clases/Classes';
import Counter from './pages/counter/Counter';
import Books from './pages/books/FavBooks';
import CV from './pages/CV/Curriculum';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/books" element={<Books />} />
          <Route path="/cv" element={<CV />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;