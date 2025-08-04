
function Image(){

    const imageUrl='./src/assets/images.jpg';
    const handleClick=(event)=> event.target.style.display="none";
    return(
        <img onClick={(event)=>handleClick(event)} src={imageUrl} alt="Placeholder" />
    )
}
export default Image;