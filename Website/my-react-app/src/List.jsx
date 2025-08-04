import PropTypes from 'prop-types';
function List(props){

    //const fruits=[{id:1,name:"Apple" , calories:96},
      //  {id:2,name:"Banana" , calories:106},
        //{id:3,name:"Cherry" , calories:159}]
    //fruits.sort((a,b)=> a.name.localeCompare(b.name)); //AlPhabetical sort
    //fruits.sort((a,b)=> b.name.localeCompare(a.name)); Reverse Numerical
    //fruits.sort((a,b)=> a.calories - b.calories); //Numerical Sort
    //fruits.sort((a,b)=> b.calories - a.calories);
    //const lowCalFruit=fruits.filter(fruit=>fruit.calories<100)
    const itemList=props.items;
    const category=props.category;
    
    const listItems= itemList.map(fruit => <li key={fruit.id}>{fruit.name} :<b> {fruit.calories} calories</b></li>)

    return (
        <>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems}</ol>
        </>
    );

}
List.propTypes={
    category:PropTypes.string,
    items:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number,
        name:PropTypes.string,
        calories:PropTypes.number,
    })
).isRequired,
}
List.defaultProps={
    items:[],
    category:"category",
}
function App() {

      const fruits=[{id:1,name:"Apple" , calories:"Apple"},
        {id:2,name:"Banana" , calories:106},
        {id:3,name:"Cherry" , calories:159}]
      const vegetables=[{id:1,name:"Carrot" , calories:41},
        {id:2,name:"Broccoli" , calories:55},
        {id:3,name:"Spinach" , calories:23}]
  return(
    <>
    <List items={fruits} category="Fruits"></List>
    <List items={vegetables} category="Vegetables"></List>

    </>
  );
}
export default List;