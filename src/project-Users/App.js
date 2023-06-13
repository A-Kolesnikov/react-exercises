import logo from '../logo.svg';
import '../App.css';
import React from 'react'
import { User } from './User';
import { Users } from './Users'

class App extends React.Component {
  constructor() {
    super();
    this.state = { myUsers: [] }
    this.getCheckedAndUsername = this.getCheckedAndUsername.bind(this)
  }

  getCheckedAndUsername(isChecked, userName) {
    if (isChecked) {
      const newArr = this.state.myUsers
      newArr.push(userName)
      this.setState({ myUsers: newArr })
      console.log(this.state.myUsers)
    } else {
      let newArr = this.state.myUsers
      newArr = newArr.filter(element => { return (element !== userName) })
      this.setState({ myUsers: newArr })
      console.log(this.state.myUsers) //Why is it glitching?
    }
    alert('You want me to' + (isChecked ? ` remember you, ${userName}` : ` forget you, ${userName}`))

  }

  render() {
    const usersToDraw = this.state.myUsers.map(element => { const uuid = crypto.randomUUID(); return <li key={uuid}>{element}</li> })

    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt="logo" />

          <h1>User details!</h1>
          <Users>
            <User username="Shahar" email="Ab@cd.ef" onUserClick={this.getCheckedAndUsername} />
            <User username="Andrei" email="12@34.ef" onUserClick={this.getCheckedAndUsername} />
            <User username="U3" email="u3@gmail.ocm" onUserClick={this.getCheckedAndUsername} />
            <User username="U4" email="u4@gmail.com" onUserClick={this.getCheckedAndUsername} />
          </Users>
          <ul>
            {usersToDraw}
          </ul>
        </header>

      </div>
    );
  }
}

export default App;
