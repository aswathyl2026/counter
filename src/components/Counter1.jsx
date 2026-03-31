import React from 'react'

function Counter1() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 ">
    <div className="border rounded p-5 text-center" style={{ width: "500px" }}>
      <h1 className='display-1 text-light'>0</h1>
      <div className="d-flex justify-content-center gap-3 mb-4">
        <button className='btn btn-warning'>Decrement</button>
         <button className='btn btn-danger'>Reset</button>
          <button className='btn btn-success'>Increment</button>
      </div>
        <div className="d-flex  gap-2 ">
        <input className='btn btn-light' placeholder='enter the amount to be incremented!!!!'/>
         <button className='btn btn-primary'>Increment By Amount</button>
         
      </div>
    </div>
    </div>
  )
}

export default Counter1
