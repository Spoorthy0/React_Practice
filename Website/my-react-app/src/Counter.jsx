import React,{useState} from 'react';
function Counter(){
    const [count,setCount]=useState(0);
    const increment=()=>{
        //Uses the current state to calculate next State
        //set function dont trigger an update
        //React batches together state updates for performance reasons
        //NEXT state becomes the CURRENT state after an update

       // setCount(count+1); //same like setCount(0+1)
        //setCount(count+1);//same like setCount(0+1)

        //Takes the PENDING state to calculate NEXT state
        //React puts your updater functions in a queue(waiting in line)
        //During the next render, it will call them in the same order 
        
        setCount(prevCount=>prevCount+1);
        setCount(prevCount=>prevCount+1);
    }
     const decrement=()=>{
        //setCount(count-1);
        setCount(prevCount=>prevCount-1);
        setCount(prevCount=>prevCount-1);
    }
     const reset=()=>{
       // setCount(0);
       setCount(prevCount=> prevCount=0)
    }
    return(
        <div className='counter-container'>
        <h1 className='counter'>{count}</h1>
        <button className='btn' onClick={decrement}>Decrement</button>
        <button className='btn' onClick={reset}>Reset</button>
        <button className='btn' onClick={increment}>Increment</button>

        </div>
    )

}
export default Counter;