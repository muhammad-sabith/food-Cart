import React from "react";
import "../app.css";

function AddToCart({ addToCartItem }) {


 // console.log(addToCartItem);

  let addCartItems = addToCartItem.map((item)=>{
      return(
        <div className="dash">
           <img src={item.img} alt="" />
            <h6>{item.title}</h6>
      
      </div>
      )})


  return (
    <>
      
        <div className="add-to-cart-wraper">
          <div className="add-to-cart-item">
            <h6 className=" text-center">Your Cart</h6>
             {addCartItems}
            
          </div>
        </div>
    </>
  );
};

export default AddToCart;
