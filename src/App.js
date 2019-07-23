import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    users: [
      { name: "anapp4that" },
      { name: "ArDelta" }
    ]
  }

  nameChangedHandler = (event) => {
    let otherName = this.state.users[1].name;
    this.setState({
      users: [
        { name: event.target.value },
        { name: otherName }
      ]
    })
  }

  altNameChangedHandler = (event) => {
    let otherName = this.state.users[0].name;
    this.setState({
      users: [
        { name: otherName },
        { name: event.target.value }
      ]
    })
  }

  render() {
    return (
      <div className="App" >
        <UserOutput
          userName={this.state.users[0].name}
          changed={this.nameChangedHandler}
          value={this.state.users[0].name}
        />
        <UserOutput
          userName={this.state.users[1].name}
          changed={this.altNameChangedHandler}
          value={this.state.users[1].name}
        />
      </div>
    )
  }
}

export default App;
