import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import BoardContainer from './components/Board/BoardContainer';


const App = () => {
  return (
    <div className='App'>
      <header>
       <Header />
      </header>
      <main>
        <BoardContainer />
      </main>
    </div>
  );
}

export default App;
