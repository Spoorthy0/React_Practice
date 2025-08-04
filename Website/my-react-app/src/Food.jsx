
function Food(){

    const food1="Orange";
    const food2="Apple";
    return (
        <Food>
        <ul>
            <li>Banana</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
        <hr></hr>
        </Food>

    );
}
export default Food