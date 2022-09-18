import React, { Component } from 'react'
import loader from '../images/Loading.gif'

export default class Loading extends Component {
  render() {
    return (
      <div className='text-center'  style ={{marginTop:"50px"}}>
        <img src={loader} alt=""/> 
      </div>
    )
  }
}
