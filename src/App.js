import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Aos from "aos";
import "aos/dist/aos.css"

function App() {
  useEffect( ()=>{
    Aos.init({duration: 2000});
  }, [] )
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p className="mt-48">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <p className="mt-48">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <p className="mt-48">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <p className="mt-48">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <p className="mt-48">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <p className="mt-48">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <p className="mt-48">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <p data-aos="fade-up" className="mt-48">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <p className="mt-48">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <p className="mt-48">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <p data-aos="fade-left" className="mt-48">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <p className="mt-48">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <p className="mt-48">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <p data-aos="fade-right" className="mt-48">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <p className="mt-48">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <p className="mt-48">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
      </header>
    </div>
  );
}

export default App;
