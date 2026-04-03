import React, { useRef } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../redux/slices/counterSlice'
function Counter1() {
  const {count}=useSelector(state=>state.counterReducer)
  const dispatch=useDispatch()
  const inputRef=useRef()
  const handleIncrement=()=>{
    const amount=inputRef.current.value
    if(amount){
       dispatch(incrementByAmount(+amount))
       inputRef.current.value=""
    }else{
      alert("enter valid amount")
    }
  }
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 ">
    <div className="border rounded p-5 text-center" style={{ width: "500px" }}>
      <h1 className='display-1 text-light'>{count}</h1>
      <div className="d-flex justify-content-center gap-3 mb-4">
        <button className='btn btn-warning' onClick={()=>dispatch(decrement())}>Decrement</button>
         <button className='btn btn-danger' onClick={()=>dispatch(reset())}>Reset</button>
          <button className='btn btn-success' onClick={()=>dispatch(increment())}>Increment</button>
      </div>
        <div className="d-flex  gap-2 ">
        <input ref={inputRef} className='btn btn-light' placeholder='enter the amount to be incremented!!!!'/>
         <button onClick={handleIncrement} className='btn btn-primary'>Increment By Amount</button>
         
      </div>
    </div>
    </div>
  )
}

export default Counter1
