import React, { Component } from 'react'

export default class Notfound extends Component {
  render() {
    return (
      <div className='row'>
        <div className="col-md-12 text-center mt-3"  style={{
          position: 'absolute', top: '50%',
          left: ' 0%',
          transform: 'translateY(-50%)',
          margin: 0
        }}>
            <h1>Sorry ! No Result Found..</h1>
            <p>Please try again later.</p>
        </div>
      </div>
    )
  }
}
