import React,{useState} from 'react'
function MyComponent3(){
    const [fruits,setFruits]=useState(["Apple","Orange","Banana"]);
    function handleAddFruit(){
        const newFood=document.getElementById("foodInput").value;
        document.getElementById("foodInput").value="";
        if(newFood.trim()!=="")
        setFruits(fruits=>[...fruits,newFood]);

    }
    function handleRemoveFruit(index){

        setFruits(fruits.filter((_,i)=>i!==index))

    }
    return(
        <div>
            <h1>Fruit List </h1>
            <ul>
                {fruits.map((fruit,index)=><li key={index} onClick={()=>handleRemoveFruit(index)}>{fruit}</li>)}
            </ul>
            <input type="text" id="foodInput" placeholder='Enter a fruit' />
            <button onClick={handleAddFruit}>Add Fruit</button>
        </div>
    )

}
export default MyComponent3;