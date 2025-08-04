

function Button(){
 /*
    let count=0;
    const handleClick=(name)=>{
          if (count<3){
            count++;
            console.log(`${name} you clicked me ${count} time`);
           
          }
          else{
            console.log(`${name} Stop clicking me!!`)
          }

    };*/

    const handleClick=(event)=> event.target.textContent="Clicked🤕";
    return(
        <button className="btn" onClick={(event) => handleClick(event)}>Click Me 😉</button>
    );
}

export default Button;