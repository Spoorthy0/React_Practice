import React,{useState,useEffect} from 'react';
function MyComponent5(){
    /*const [count,setCount]= useState(0);
    const [color,setColor]=useState("green");
    useEffect(()=>{
        document.title=`Count: ${count} ${color}`;

        return ()=>{
            //SOME CLEANUP CODE
        }
    },[count,color]);

    function addCount(){
        setCount(prevCount=>prevCount+1);
    }
     function subCount(){
        setCount(prevCount=>prevCount-1);
    }
    function changeColor(){
        setColor(c=>c==="green"? "red" : "green");
    }

    return(
        <div>
            <p style={{color:color}}>Count: {count} </p>
            <button onClick={addCount}>Add</button>
            <button onClick={subCount}>Subtract</button>
             <button onClick={changeColor}>Change Color</button>
        </div>
    )*/


    const [width,setWidth]=useState(window.innerWidth);
    const [height,setHeight]=useState(window.innerHeight);

    useEffect(()=>{
         window.addEventListener("resize",handleResize);
        console.log("Event listenr added");

        return ()=>{
          window.removeEventListener("resize",handleResize);
          console.log('Event Listener removed');
        }
    },[]);

    useEffect(()=>{
        document.title=`Size: ${width} x ${height}`;
    },[width,height]);


    
   // window.addEventListener("resize",handleResize);
    //console.log("Event listenr added");

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(
        <>
        <p>Window width: {width}px</p>
        <p>Window Height: {height}px</p>
        </>
    )


}
export default MyComponent5;
