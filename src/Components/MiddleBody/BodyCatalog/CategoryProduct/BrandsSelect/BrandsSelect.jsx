import { json } from "react-router-dom";
import "../BrandsSelect/BrandsSelect.css";

import Checkbox from "./Checkbox/Checkbox";
import { country, brands, feed } from "../../../../data";
import { useRef, useEffect, useState } from "react";
import { create } from "zustand";


export const useFilterCheckBox=create((set)=>(
{
  countries:[],
  brandsArray:[],
  feeds:[]
}))

function BrandsSelect() {
  const [checkboxes, setCheckboxes] = useState(
    Array(country.length).fill(false)
  );

  const [checkboxesBrands, setCheckboxesBrands] = useState(
    Array(brands.length).fill(false)
  );

  const [checkboxesFeed, setCheckboxesFeed] = useState(
    Array(feed.length).fill(false)
  );

  const{countries, brandsArray, feeds}=useFilterCheckBox();

  const listItemsCountry = country.map((person, index) => (
    <Checkbox 
      checked={checkboxes[index]}
      key={index}
      onChange={() => handleCheckboxChange(index, "country") }
    >
      {person}
    </Checkbox>
  ));

  const listItemsBrands = brands.map((brands, index) => (
    <Checkbox 
      checked={checkboxesBrands[index]}
      key={index}
      onChange={() => handleCheckboxChange(index, "brands") }>
      {brands}
    </Checkbox>
  ));

  const listItemsFeeds = feed.map((feeds, index) => (
    <Checkbox 
      checked={checkboxesFeed[index]}
      key={index}
      onChange={() => handleCheckboxChange(index, "feed") }>
      {feeds}
    </Checkbox>
  ));



  const handleRemoveChecked = () => {
    const newCheckboxes = checkboxes.map(() => false);
    setCheckboxes(newCheckboxes);
  };

  
  const handleCheckboxChange = (index, filterType) => {

    switch(filterType){
      case "country":
    const newCheckboxes = [...checkboxes];
    newCheckboxes[index] = !newCheckboxes[index];
    setCheckboxes(newCheckboxes);
    if(!countries.includes(country[index]))
      {
        countries.push(country[index])
      }
      else{
        countries.splice(countries.indexOf(country[index]),1)
      }
      console.log(countries)
      break;

      case "brands":
        const newCheckboxesBrands = [...checkboxesBrands];
        newCheckboxesBrands[index] = !newCheckboxesBrands[index];
        setCheckboxesBrands(newCheckboxesBrands);
        if(!brandsArray.includes(brands[index]))
          {
            brandsArray.push(brands[index])
          }
          else{
            brandsArray.splice(brandsArray.indexOf(brands[index]),1)
          }
          console.log(brandsArray)
      break;

      case "feed":
        const newCheckboxesFeed = [...checkboxesFeed];
        newCheckboxesFeed[index] = !newCheckboxesFeed[index];
        setCheckboxesFeed(newCheckboxesFeed);
        if(!feeds.includes(feed[index]))
          {
            feeds.push(feed[index])
          }
          else{
            feeds.splice(feeds.indexOf(feed[index]),1)
          }
          console.log(feeds)
      break;
    }

  
  };

  const [bool, setBool] = useState(false);
  const [inputСondition, setInputСondition] = useState({
    brands: "none",
    typeFeed: "none",
    countrys: "none",
  });

  function showCheckboxBrands(type) {
    setBool(type);
    if (type) {
      setInputСondition({ brands: "block", typeFeed: inputСondition.typeFeed });
    } else {
      setInputСondition({ brands: "none", typeFeed: inputСondition.typeFeed });
    }
  }

  function showCheckboxTypeFeed(type) {
    setBool(type);
    if (type) {
      setInputСondition({ brands: inputСondition.brands, typeFeed: "block" });
    } else {
      setInputСondition({ brands: inputСondition.brands, typeFeed: "none" });
    }
  }

  function showCheckboxCountry(type) {
    setBool(type);
    if (type) {
      setInputСondition({ countrys: "block" });
    } else {
      setInputСondition({ countrys: "none" });
    }
  }

  return (
    <div class="multiselect" style={{ marginTop: "15px" }}>
      <div class="selectBox" onClick={() => showCheckboxBrands(!bool)}>
        <select>
          <option>Выберите бренд</option>
        </select>
        <div class="overSelect"></div>
      </div>
      <div
        className="checkboxes-brands"
        style={{ display: `${inputСondition.brands}` }}
      >
       {listItemsBrands}
      </div>

      <div class="selectBox" onClick={() => showCheckboxTypeFeed(!bool)}>
        <select>
          <option>Тип корма</option>
        </select>
        <div class="overSelect"></div>
      </div>
      <div
        className="checkboxes-type-feed"
        style={{ display: `${inputСondition.typeFeed}` }}
      >
       {listItemsFeeds}
      </div>

      <div class="selectBox" onClick={() => showCheckboxCountry(!bool)}>
        <select>
          <option>Страна производителя</option>
        </select>
        <div class="overSelect"></div>
      </div>
      <div
        className="checkboxes-country"
        style={{ display: `${inputСondition.countrys}` }}
      >
        {listItemsCountry}
      </div>
      <div className="button-filters">
        <input type="button" onClick={handleRemoveChecked} value="Сбросить" />
        <input type="button"   value="Применить" />
      </div>
    </div>
  );
}

export default BrandsSelect;
