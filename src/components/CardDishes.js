import React from 'react'



function CardDishes({menuItem,showPopupHandler}) {

  
  
    return (
        <li>
          <a href="javaScript:;" onClick={()=>showPopupHandler(menuItem.strMeal)}>
        <img src={menuItem.strMealThumb} alt="" />
        </a>
        <h6>{menuItem.strMeal}</h6>
        
      </li>
    )
}

export default CardDishes
