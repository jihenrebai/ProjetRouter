import './App.css';
import React, { useState } from 'react';
import Home from './Componnents/home';
import Detail from './Componnents/detail';
import { Routes, Link, Route } from 'react-router-dom';

function App() {
  const [objs, setobjs] = useState([
    {
      id: 1,
      title : 'COWBOYS',
      description: "",
      posterURL: 'https://www.cpasmieux.buzz/8792290-cowboys.html',
      rating: '60%',
    },
    {
      id: 2,
      title : 'ZOMBIES',
      description: "",
      posterURL: 'https://www.imdb.com/title/tt6878820/',
      rating: '40%',
    }
  ]);

  return (
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home objs={objs} setobjs={setobjs} />} />
          <Route path="/detail/:id" element={<Detail movieData={objs} />} />
        </Routes>
        
    </div>
  );
}

export default App;