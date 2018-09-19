import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Hello = () => <h2>Hello World from HSBC!</h2>
//const Image = () => <img src="https://www.w3schools.com/html/pic_trulli.jpg" alt="Italian Trulli"></img>

// Functional Component, Stateless Component
const Image = (props) => {
  let {src1, title, width, height} = props;
  src1 = src1 || 'https://www.w3schools.com/html/pic_trulli.jpg';
  title = title || 'HSBC Training Demo';
  width = width || '310.93px';
  height = height || '300px';
  return(
    <img src={src1} alt={title} width={width} height={height}/>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React from HSBC</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Hello/>
        <Image src1='https://www.w3schools.com/html/pic_trulli.jpg' title='Italian Trulli' width='310.93px' height='300px'/>
        <Image src1='https://www.w3schools.com/html/img_girl.jpg' title='Girl in a Jacket' width='310.93px' height='300px'/>
        <Image src1='https://www.w3schools.com/html/img_chania.jpg' title='Flowers in Chania' width='310.93px' height='300px'/>
      </div>
    );
  }
}

export default App;
