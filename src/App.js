import './App.css';
import './Navbar';
import './TextForm';
import Navbar from './Navbar';
import TextForm from './TextForm';
import React, { useState, useSyncExternalStore } from 'react'; 
import Alert from './Alert';
import About from './About';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#213555';
      showAlert("Dark mode has been enable","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enable","success");
    }
  }
  return (
    <div>  
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className='container my-3'>
      <Routes>
        <Route path="/about" element={<About/>}/>
        {/* <Link to="about">B</Link> */}
       <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}/>      
      </Routes>
      </div>
      </Router>
    </div>
  );
}

export default App;
