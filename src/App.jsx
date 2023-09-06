import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import React, { useState } from 'react'
import Alert from "./Components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link} from "react-router-dom";

function App() {
  const[mode, setMode]= useState("light")

  const[alert, setAlert]= useState("null")

  function showAlert(message, type){
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
    setAlert(null)
    }, 2000)
  }


  function toggleMode(){
 if(mode==='light'){
  setMode('dark')
  document.body.style.backgroundColor='#0e1733'
  showAlert('Enabled DarkMode', 'success')
 } else{
  setMode('light')
  document.body.style.backgroundColor='white'
  showAlert('Disabled DarkMode', 'success')
 }
  }

  return (
    <>
      <Router>
      <Navbar title="TextUtlis" about="About Us" mode={mode}  toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Switch>
          <Route exact path="/about">
          <About mode={mode}/>
          </Route> 
           <Route path="/">
          <TextForm heading ="Try TextUtlis- Word Counter, Remove Extra Spaces, Copy it" showAlert={showAlert} mode={mode} />
          </Route>
          </Switch>
          </div>
         </Router>
      
    
    </>
  );
}

export default App;
