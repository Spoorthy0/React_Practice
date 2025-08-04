import Logo from './assets/images.jpg';

function Card(){
    return(
        <div className="card">
            <img className='card-image' src={Logo} alt="Youtube logo"></img>
            <h2 className='card-title'>Youtube</h2>
            <p className='card-description'>Youtube is mainly used for entertainment and gaining knowledge</p>
        </div>
    )
}

export default Card;
