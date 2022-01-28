import React, { useContext } from "react";
import "../app.css";
import { AllMenuContext } from "./Menus";



function Popup({ closeHandler, currentDish,addToCartHandler }) {

console.log(currentDish);
  const allMenu = useContext(AllMenuContext)


  let dishDetailes = allMenu?.filter((menuItem) => {
      return menuItem.strMeal === currentDish
      
    })
    .map((item) => {
      return (
      <div className="popup-container">
       
      <h2>{item.strMeal}</h2>
      <h3><span>Origin From :</span>  {item.strArea}</h3>
      <p>{item.strInstructions}</p>
      <button onClick={()=>addToCartHandler(item.strMeal,item.strMealThumb)}>Order Now</button>
        <h5 onClick={closeHandler} className=".popup-content-close">
          Close
        </h5>
      </div>
        )
      
    });

  return (
    <div className="popup">
      <div className="popup-content">
        {dishDetailes}
      </div>
    </div>
  );
}

export default Popup;
