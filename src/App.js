import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar';
import Messages from './components/Dialogs/Dialogs'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Profile from './components/Profile/Profile';

const App = (props) => {
  return (
  <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className='page-wrapper'>
      <Routes>
        <Route path='/profile' Component={Profile}/>
        <Route path='/messages' Component={Messages}/>
      </Routes>
      </div>
    </div>
  </BrowserRouter>
  );
}

export default App;

