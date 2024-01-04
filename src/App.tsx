import React from 'react';
import './App.css';
import Counter from './components/Counter';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      {window.location.pathname === "/todo" ?
        <Todo />
        : <Counter />
      }
    </div>
  );
}

export default App;
