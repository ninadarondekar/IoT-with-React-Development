import React from 'react';
import Dashboard from './Components/Dashboard';
import './Components/Dashboard.css';
import API from './Components/API';
import './Components/API.css'
import Eventspage from './Components/Eventspage';
const App = () => {
  return (
    <>
    <Dashboard />
    <API />
    <Eventspage />
    </>
  )
}

export default App