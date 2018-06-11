import React, { Component } from 'react'
import { Provider } from 'react-redux'
import logo from './logo.svg'
import './Assets/css/app.min.css'
import store from './store'
import Customers from './components/Customer/customers'

class App extends Component {

  render () {
    return (
      <Provider store={ store }>
        <div className="App">
          <header className="App-header">
            <img src={ logo } className="App-logo" alt="logo"/>
            <h1 className="App-title">React/Redux Express Starter</h1>
            <p>Made by Adrian Beria.</p>
            <p>Web Developer</p>
          </header>
          <Customers/>
        </div>
      </Provider>
    )
  }
}

export default App
