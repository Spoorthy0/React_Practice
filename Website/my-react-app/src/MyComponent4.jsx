import React,{useState} from 'react';
function MyComponent4(){
    const [cars,setCars]=useState([]);
    const [carYear,setCarYear]=useState(new Date().getFullYear());
    const [carMake,setCarMake]=useState("");
    const [carModel,setCarModel]=useState("");

    function handleCarAdd(){
       // const carYear=document.getElementById("carYear").value;
        //const carMake=document.getElementById("carMake").value;
        //const carModel=document.getElementById("carModel").value;
        const newCar={year:carYear,
                      make:carMake,
                      model:carModel
        }
        setCars([...cars,newCar]);
    }
 
    function handleYearChange(event){
        setCarYear(event.target.value);
    }     
    function handleMakeChange(event){
        setCarMake(event.target.value);
    }     
    function handleModelChange(event){
        setCarModel(event.target.value);

    }  

    
    function handleCarRemove(index){
        setCars(cars.filter((_,i)=>i!=index));

    }
    return(
        <div>
            <h1>List of Car Objects</h1>
            <ul>{cars.map((car,index)=><li key={index} onClick={()=>{handleCarRemove(index)}}>{car.year} {car.make} {car.model}</li>)}</ul>
            <input type="number" value={carYear} id="carYear" placeholder='Enter car year' onChange={handleYearChange}/>  <br/>
            <input type="text" value={carMake} id="carMake" placeholder='Enter car make' onChange={(e)=>handleMakeChange(e)}/> <br/>
            <input type="text" value={carModel} id="carModel" placeholder='Enter car model' onChange={(e)=>handleModelChange(e)}/> <br/>

            <button onClick={handleCarAdd}>Add Car</button>
        </div>
    )

}
export default MyComponent4;