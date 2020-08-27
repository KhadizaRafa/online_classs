import React from 'react';
import './UserCart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'

const UserCart = (props) => {
    const course = props.userCourse;
    let total = course.reduce((total,course)=>total + course.price,0)
    let courseNames = course.map((c)=>c.name)
    let discount=0;

    if(total>=1000){
        discount = 40;
    }
    else if(total>500)
    {
        discount = 20;
    }
    else{
        discount = 10;
    }
    return (
        <div className="cart-style">
             <h5><FontAwesomeIcon icon={faCartArrowDown} style={{color: 'red',fontSize:'20px'}} /> User Cart</h5>
             <p>Number of Course enrolled: {course.length} </p>
             <div>Course Name :
                <h6 style={{color:"blue"}}>
                 {
                   course.map((c)=><p>{c.name} : ${c.price}</p>)  
                 }
                 
                 </h6>
            </div>
             <p>Total course price :{total}</p>
             <p>Discount: {discount}%</p>
             <p>Total Amount: ${(total - Math.round((total*discount)/100)).toFixed(2)}</p>
        </div>
    );
};

export default UserCart;