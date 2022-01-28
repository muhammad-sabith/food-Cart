import React, { useContext, useState } from "react";
import CardDishes from "./CardDishes";
import Pagination from "./Pagination";
import { AllMenuContext } from "./Menus";
import Popup from "./Popup";
import AddToCart from "./AddToCart";

function FilterdDishes({
  FilterdDishes,
  singleCategory,
  setSingleCategory,
})
 {
const allMenu = useContext(AllMenuContext)

  //console.log(singleCategory);
  const [filterdDishes, setFilterdDishes] = useState([]);
  const [activelist, setActivelist] = useState("Beef");
  const [currentPage, setCurrentPage] = useState(1);
  const [pagePeritems, setPagePeritems] = useState(4);
  const [popup, setPopup] = useState(false);
  const [currentDish, setCurrentDish] = useState('')
  const [addToCartItem, setAddToCartItem] = useState([])


 function showPopupHandler(dishName){
   console.log(dishName);
    setPopup(true)
    setCurrentDish(dishName)
 }

 function closeHandler() {
  setPopup(false);
}

  let idexOfLastDish = currentPage * pagePeritems;

  let indexOfFirstPage = idexOfLastDish - pagePeritems;

  let showItemsNow = filterdDishes.slice(indexOfFirstPage, idexOfLastDish);

  // console.log("sasasasa",FilterdDishes);
  //console.log(allMenus);

  //listBy category

  const listCategory = showItemsNow?.map((dish) => {
    return (
      <li>
        <img src={dish.strMealThumb} alt="" />
        <h6>{dish.strMeal}</h6>
      </li>
    );
  });

  //show only single dishes
  let maxItem = 8;
  const singleDishItem = singleCategory.map((menuItem, index) => {
    if (index < maxItem) {
      return <CardDishes menuItem={menuItem} showPopupHandler={showPopupHandler} />;
    }
  });
  //console.log(filterdDishes.length);
  function showFilterdDishesHandler(category) {
    setSingleCategory([]);
    setActivelist(category);
    //console.log(category);

    
   // filterd dises list


    const filterdDishesAre = allMenu?.filter((item) => {
      return item.strCategory === category;
    });
    setFilterdDishes(filterdDishesAre);
  }

  // category list

  const allCategories = FilterdDishes.map((item) => {
    return (
      <li
        className={item.strCategory === activelist ? "active" : ""}
        onClick={() => showFilterdDishesHandler(item.strCategory)}
      > 
        {item.strCategory}
      </li>
    );
  });

  //add to cart
  function addToCartHandler(addToCartTitle, addToCartImg) {
    //console.log(addToCartTitle, addToCartImg);
    setAddToCartItem([...addToCartItem,{ img: addToCartImg, title: addToCartTitle}]);
    
  }
  return (
    
    <section className="filterd-dishes">
      {popup && <Popup closeHandler={closeHandler} currentDish={currentDish} addToCartHandler={addToCartHandler} />}
      <div className="container ">
      <AddToCart addToCartItem={addToCartItem} />
        <div className="text-center">
          <h2>Choose your Dishes</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit fugit
            tenetur quaerat maiores laborum reiciendis repudiandae enim nulla
            voluptatum quod?
          </p>
        </div>
        <div className="filterd-Dishes">
          <ul>{allCategories}</ul>
        </div>
        <div className="filterd-dishes-results">
          <ul className="flex flex-wrap ">
            {singleDishItem}
            {singleDishItem !== 0 || filterdDishes.length !== 0 ? (
              listCategory
            ) : (
              <div className="alert">
                <h3>Sorry No Item Found</h3>
                <h4>please try another </h4>
              </div>
            )}
          </ul>
        </div>
      </div>

      <Pagination
        filterdDishes={filterdDishes}
        pagePeritems={pagePeritems}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
}

export default FilterdDishes;
