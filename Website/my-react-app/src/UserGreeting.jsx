import PropTypes from 'prop-types';

function UserGreeting(props){
  /* if(props.isLoggedIn){
       return(
           <h2>Name:{props.username}</h2>
       )
   }
   else{
    return <h2>Please Login to continue</h2>
   }*/
  return(props.isLoggedIn ? <h2 className="welcome-message">Welcome {props.username}</h2> : <h2 className="login-message">Please login to continue</h2>)
}
UserGreeting.proptypes={
    username:PropTypes.string.isRequired,
    isLoggedIn:PropTypes.bool,
}
export default UserGreeting;