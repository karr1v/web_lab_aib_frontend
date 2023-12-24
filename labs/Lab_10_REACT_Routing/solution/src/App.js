import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import UserList from './components/UserList';
import About from './components/About';
import UserDetails from './components/UserDetails';
import { fetchData } from './services/ApiService';
import './App.css'

function App() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchPeopleData = async () => {
      try {
        const data = await fetchData();
        setPeople(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPeopleData();
  }, []);

  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </header>
      <Routes>
        <Route path="/" element={<UserList people={people} />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<UserDetails people={people} />} />
      </Routes>
    </>
  );
}

export default App;
