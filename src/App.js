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

class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        Hello {this.props.name}
      </div>
    );
  }
}

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        Seconds: {this.state.seconds}
      </div>
    );
  }
}

//ReactDOM.render(<Timer />, mountNode);

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

//ReactDOM.render(<TodoApp />, mountNode);

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
        <Timer/>
        <HelloMessage name="Junnel Teves" />
        <TodoApp/>
        <Image src1='https://www.w3schools.com/html/pic_trulli.jpg' title='Italian Trulli' width='310.93px' height='300px'/>
        <Image src1='https://www.w3schools.com/html/img_girl.jpg' title='Girl in a Jacket' width='310.93px' height='300px'/>
        <Image src1='https://www.w3schools.com/html/img_chania.jpg' title='Flowers in Chania' width='310.93px' height='300px'/>
      </div>
    );
  }
}

export default App;
