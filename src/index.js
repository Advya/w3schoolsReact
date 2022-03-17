import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useState } from 'react';
import Todos from './Todos';

import Layout from './pages/Layout';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';

import Car from './Car';
import './App.css';

export default function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(['[] todo my react app', '[x] eat something', '[] do work']);

  const increment = () => {
    setCount((c) => c + 1 );
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='blogs' element={<Blogs />} />
            <Route path='contact' element={<Contact />} />
            <Route path='*' element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Todos todos={todos} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
      <Car />
    </>
  );
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root)
