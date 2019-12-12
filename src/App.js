import React from 'react';

// Components
import Header from './components/Header'
import Form from './components/Form'
import Circles from './components/Circles'
import Result from './components/Result'
// Style
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App__body">
        <Circles />
        <Form />
      </div>
      <Result />
    </div>
  );
}

export default App;
