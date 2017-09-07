import React, { Component } from 'react'
import Home from '../Home/Home'
import './main.css'
// import Cart from '../Cart/Cart'
// import Order from '../Order/Order'

class Main extends Component {
  render () {
    return (
      <div className='main'>
        <div className='main-page-wrap'>
          <Home />
        </div>
      </div>
    )
  }
}

export default Main
