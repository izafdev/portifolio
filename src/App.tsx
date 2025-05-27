import { useState } from 'react'
import Header from '../src/components/Header/Header';
import './App.css'
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      {/* Aqui depois entra Home, About, Skills, etc */}
      <section id="home">
        <h1>Olá, me chamo Izabely Fernandes</h1>
        <p>Desenvolvedora Front-End</p>
      </section>
    </>
  );
}

export default App;
