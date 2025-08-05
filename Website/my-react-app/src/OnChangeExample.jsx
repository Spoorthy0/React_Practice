import React,{useState} from 'react';
function MyComponent1(){
    const[name,setName]=useState("Panda");
    const [quantity,setQuantity]=useState(0);
    const [comment,setComment]=useState("");
    const [payment,setPayment]=useState("");
    const [gender,setGender]=useState("");
    const handleChange=(event)=>{
        setName(event.target.value)
    }
    const handleQuantityChange=(event)=>{
        setQuantity(event.target.value);
    }
    function handleCommentChange(event){
        setComment(event.target.value);
    }
    function handlePaymentChange(event){
        setPayment(event.target.value);
    }
    const handleGenderChange=(event)=>{
        setGender(event.target.value);
    }
    return(
        <div>
            <input value={name} onChange={handleChange} />
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type='number' />
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange}  placeholder='Enter Delivery Address'/>
            
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select Payment Method</option>
                <option value="Credit card">Credit Card</option>
                <option value="PayPal">PayPal</option>
            </select>
            <p>Payment Method: {payment}</p>

            <input type="radio" value="Male" onChange={handleGenderChange} name='gender'/>Male
            <input type="radio" value="Female" onChange={handleGenderChange} name='gender'/>Female
            <p>Gender: {gender}</p>
        </div>
    )

}
export default MyComponent1;