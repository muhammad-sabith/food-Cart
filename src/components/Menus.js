import axios from "axios";
import React, { useEffect, useState } from "react";
import FilterdDishes from "./FilterdDishes";
import Hero from "./Hero";
import SpecialDishes from "./SpecialDishes";
import { API_URL, categoriesUrl, singleCategoryUrl } from "../Constence";
import react from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CheckOut from "./CheckOut";

//global context

export const AllMenuContext = React.createContext();

function Menus() {
  const [menu, setMenu] = useState([]);
  const [category, setCategory] = useState([]);
  const [singleCategory, setSingleCategory] = useState([]);

  useEffect(() => {
    axios.get(API_URL).then((response) => setMenu(response.data.meals));
    axios
      .get(categoriesUrl)
      .then((response) => setCategory(response.data.categories));
    axios
      .get(singleCategoryUrl)
      .then((response) => setSingleCategory(response.data.meals));
  }, []);

  //console.log(menu);
  // console.log("category is",category);
  //console.log(singleCategory);

  return (
    <div>
      <Router>
        <Navbar />
        <Hero />
        <Switch>
          <Route exact path='/'>
            <AllMenuContext.Provider value={menu}>
              <SpecialDishes  />
              <FilterdDishes
                FilterdDishes={category}
                singleCategory={singleCategory}
                setSingleCategory={setSingleCategory}
              />
            </AllMenuContext.Provider>
          </Route>
          <Route path='/checkout'>
            <CheckOut />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Menus;
