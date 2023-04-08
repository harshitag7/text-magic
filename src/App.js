// import logo from './logo.svg';
import React, { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//chalaki --> alert ko chupane ki (we did props.alert && {code}) & seted alert as null


import N from './components/N';
import Textarea from './components/Textarea.js';
import Alert from './components/Alert.js';

//alert is a object here

function App() {

  const [mode] = useState('light');
  const [alert, setAlert] = useState(null)

  // const toggleMode = () => {
  //   if (mode === 'light') {
  //     setMode('dark');
  //     showAlert('success', 'Dark mode is on');
  //     setTimeout(() => {
  //       setAlert(null)
  //     }, 1500);
  //     // document.body.style.backgroundColor = 'black';
  //   } else {
  //     setMode('light');
  //     showAlert('success', 'Light mode is on');
  //     setTimeout(() => {
  //       setAlert(null)
  //     }, 1500);
  //     // document.body.style.backgroundColor = 'white';
  //   }
  // } 

  const showAlert = (type, msg)  => {
    setAlert({
      type: type,
      message: msg
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }



  return (
    <>
      {/* <Navbar title='TextMagic' mode={mode} toggleMode={toggleMode} /> */}
      <N title='TextMagic' />
      <Alert alert={alert} mode={mode}/>
      <Textarea mode={mode} showAlert={showAlert}/>
    </>
  );
}

export default App;
