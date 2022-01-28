import React, { useContext, useState } from "react";
import "../app.css";
import CardDishes from "./CardDishes";
import Popup from "./Popup";
import { AllMenuContext } from "./Menus";
import AddToCart from "./AddToCart";

function SpecialDishes() {
  const [popup, setPopup] = useState(false);
  const [currentDish, setCurrentDish] = useState("");
  const [addToCartItem, setAddToCartItem] = useState([]);
  //console.log(addToCartItem);
  const allMenus = useContext(AllMenuContext);
  console.log("heloooooo");

  //show popup
  function showPopupHandler(dishName) {
    console.log(dishName);
    setPopup(true);
    setCurrentDish(dishName);
  }

  //close popup
  function closeHandler() {
    setPopup(false);
  }
  //add to cart
  function addToCartHandler(addToCartTitle, addToCartImg) {
    //console.log(addToCartImg,addToCartTitle);
    setAddToCartItem([
      ...addToCartItem,
      { img: addToCartImg, title: addToCartTitle },
    ]);
  }
  //console.log(addToCartItem);

  //console.log("props are:",specialDishes);
  let maxSpecialDishes = 8;
  let specialMenus = allMenus?.map((menuItem, index) => {
    if (index < maxSpecialDishes) {
      return (
        <CardDishes showPopupHandler={showPopupHandler} menuItem={menuItem} />
      );
    }
  });
  return (
    <section className="special-dishes" id="special-dishes">
      {popup && (
        <Popup
          closeHandler={closeHandler}
          currentDish={currentDish}
          addToCartHandler={addToCartHandler}
        />
      )}
      <div className="container">
        <AddToCart addToCartItem={addToCartItem} />

        <div className="content text-center">
          <h2>Special Dishes</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
            exercitationem nulla ut asperiores eligendi quo reiciendis. Ipsa et,
            quas dolores amet cumque minima ea dignissimos?
          </p>
        </div>
        <div className="special-Dishes-list">
          <ul className="flex flex-wrap"> {specialMenus}</ul>
        </div>
      </div>
    </section>
  );
}

export default SpecialDishes;
