import React,{useState,useRef,useEffect} from 'react';
function UseReferenceExample(){

    //let [number,setNumber]=useState(0);
    
   // const ref=useRef(0); returns an object that has current property

   // console.log(ref);

   const inputRef1=useRef(null);
   const inputRef2=useRef(null);
   const inputRef3=useRef(null);


    useEffect(()=>{
        console.log("Component rendered");

    },[])

    function handleClick1(){
        //setNumber(n=>n+1);
       // ref.current++;
       inputRef1.current.focus();
        //console.log(ref.current);
        inputRef1.current.style.backgroundColor="silver";
        inputRef2.current.style.backgroundColor="";
        inputRef3.current.style.backgroundColor="";
    }

      function handleClick2(){
       inputRef2.current.focus();
       inputRef1.current.style.backgroundColor="";
       inputRef2.current.style.backgroundColor="green";
       inputRef3.current.style.backgroundColor="";
    }

      function handleClick3(){
       inputRef3.current.focus();
       inputRef1.current.style.backgroundColor=""
       inputRef2.current.style.backgroundColor=""
       inputRef3.current.style.backgroundColor="blue"    
    }
    return(
        <div>
            <button onClick={handleClick1}>Click me 1!</button>
            <input ref={inputRef1}/>

            <button onClick={handleClick2}>Click me 2!</button>
            <input ref={inputRef2}/>

            <button onClick={handleClick3}>Click me 3!</button>
            <input ref={inputRef3}/>
        </div>
    )
}
export default UseReferenceExample;