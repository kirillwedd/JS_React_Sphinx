import { json } from "react-router-dom";
import "../BrandsSelect/BrandsSelect.css";

import Checkbox from "./Checkbox/Checkbox";
import { country } from "../../../../data";
import { useRef, useEffect, useState } from "react";

function BrandsSelect() {
const [checked, setChecked]=useState(false)

function handle(type)
{
setChecked(type)

}

const handleChange=(event)=>{
setChecked(event.currentTarget.checked)
}

  const listItemsCountry = country.map((person, index) => 
  
  (<Checkbox checked={checked} onChange={handleChange} key={index}>{person}</Checkbox>)
  );

 

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
          <Checkbox fors={"jhkjk"}>Royal Canin</Checkbox>
          <Checkbox fors={"jhkjk"}>Hill's</Checkbox>
          <Checkbox fors={"jhkjk"}>Tommy</Checkbox>
          <Checkbox fors={"jhkjk"}>Дарэлл</Checkbox>
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
          <Checkbox  fors={"jhkjk"}>
            Сухой
          </Checkbox>
          <Checkbox fors={"jhkjk"}>Влажный</Checkbox>
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
        <div>
          <input type="button" onClick={()=>handle(!checked)} value="Сбросить" />
          <input type="button" value="Сохранить" />
        </div>
      </div>
    );
  }
export default BrandsSelect;
