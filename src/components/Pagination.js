import React from "react";
import { useState } from "react/cjs/react.development";
import "../app.css";
import Popup from "./Popup";

function Pagination({
  filterdDishes,
  pagePeritems,
  currentPage,
  setCurrentPage,
}) {
  const [popup, setPopup] = useState(false)

  


  // console.log(filterdDishes);

  let numberOfPages = [];
  for (let i = 1; i <= Math.ceil(filterdDishes.length / pagePeritems); i++) {
    // console.log(i);
    numberOfPages.push(i);
    console.log(numberOfPages);
  }

  function showNextDishesHandler(e) {
    setCurrentPage(e.target.id);
    console.log(e.target.id);
  }

  const pages = numberOfPages.map((pageNumber) => {
    return (
      <li className={`${pageNumber === currentPage ? "active" :''}`} id={pageNumber} onClick={showNextDishesHandler}>
        {pageNumber}
      </li>
    );
  });
  return (
    <section>
      <ul className="pagination ">{pages}</ul>
    </section>
  );
}

export default Pagination;
