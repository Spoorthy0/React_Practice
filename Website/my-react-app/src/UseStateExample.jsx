import React ,{useState} from 'react';
function UseStateExample(){
    const [name,setName]=useState("Spoorthy");
    const[age,setAge]=useState(0);
    const updateName=()=>{
        setName("Panda")
        
    }
    const updateAge=()=> {
        setAge(age+1);
    }
    const DecrementAge=()=>{
        setAge(age-1);
    }
    return(
        <div>
            <p>Name : {name}</p>
            <p>Age: {age}</p>
            <button onClick={updateName}>Set Name</button>
            <button onClick={updateAge}>Increment Age</button>
            <button onClick={DecrementAge}>Decrement Age</button>

        </div>

    )
}

export default UseStateExample;