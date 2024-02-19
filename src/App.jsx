import React from 'react'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import { originals, action, trending, comedy } from './urls'

function App() {

  return (
    <div className="App">
      <NavBar />
      <Banner url={trending} />
      <RowPost url={originals} title="Netflix Originals" />
      <RowPost url={action} title="Action" isSmall />
      <RowPost url={comedy} title="Comedy" isSmall />
    </div>
  );
}

export default App
