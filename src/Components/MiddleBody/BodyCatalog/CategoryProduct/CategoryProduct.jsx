import { useState, useEffect, useRef } from "react";
import "../CategoryProduct/CategoryProduct.css";
import BrandsSelect from "./BrandsSelect/BrandsSelect";
import { country, dataCardProduct } from "../../../data";
import CardProduct from "./CardProduct/CardProduct";
import { useFilter } from "../../../Header/Header";
import { create } from "zustand";
import { useFilterCheckBox } from "./BrandsSelect/BrandsSelect";
import Basket from "./Basket/Basket";
import { useAddProductBasket } from "./CardProduct/CardProduct";

export const useFilterPrice=create((set)=>({
  minPrice:Number(""),
  maxPrice:Number(""),
  setMinPrice:(state)=>set({minPrice: state}),
  setMaxPrice:(state)=>set({maxPrice: state})
}))

function CategoryProduct() {
  const {values}=useFilter();
  const {countries, brandsArray, feeds}=useFilterCheckBox();
  const {productBasket}=useAddProductBasket();

  const minPrice = useFilterPrice((state) => state.minPrice);
  const setMinPrice = useFilterPrice((state) => state.setMinPrice);
  const maxPrice = useFilterPrice((state) => state.maxPrice);
  const setMaxPrice = useFilterPrice((state) => state.setMaxPrice);

  const [minValue, setValue] = useState(0);
  const [minLeft, setLeft] = useState(0);
  const [minRight, setRight] = useState(25);
  const [maxValue, setMaxValue] = useState(7500);
  

  useEffect(()=>{
    setMinPrice(minValue)
    setMaxPrice(maxValue)
 
  }, [minValue, minPrice, maxValue, maxPrice])
;

 
  

const filtered = dataCardProduct.filter((dataCard) =>{
  let titleFiltered = true,
      priceFiltered = true,
  countriesFiltered = true;

if (values) {
 titleFiltered = dataCard.Title.toLowerCase().includes(values.toLowerCase());
}

if (minPrice && maxPrice) {
priceFiltered = dataCard.money >= minPrice && dataCard.money <= maxPrice;
}

if (countries.length > 0) {
  countriesFiltered = countries.includes(dataCard.country);
}

return titleFiltered &&priceFiltered && countriesFiltered;
});
  
  const ItemsCardProduct = filtered.map((product, index) => (
    <CardProduct  product={product} key={index} productInCart={productBasket.some(item=>item.Title==product.Title)}>

    </CardProduct>
    
  ));
  // Сделать состояние специальное для left right

  const onChangeHandlerRange1 = (event) => {
    if (event.target.value < maxValue) {
      setValue(event.target.value)

       
    } else {
      setValue(2500);
    }

    setLeft(() => {
      const progressLeft = minValue / 100;
      return progressLeft;
    });
  };


  const onChangeHandlerRange2 = (event) => {
    if (maxValue.valueOf() > minValue.valueOf()) {
      setMaxValue(event.target.value);
    } else {
      setMaxValue(7500);
    }

    setRight(() => {
      const progressRight = 100 - maxValue / 100;
      return progressRight;
    });
  };

  return (
    <div className="main-panel-product">
      <div className="wrapper">
        <header>
          <h2>Цена</h2>
          <p>Укажите минимальную и максимальную цену</p>
        </header>
        <div className="price-input">
          <div className="field">
            <span>Мин</span>
            <input type="number" className="input-min" value={minValue} />
          </div>
          <div className="separator">-</div>
          <div className="field">
            <span>Макс</span>
            <input
              type="text"
              className="input-max"
              step={1}
              value={maxValue}
            />
          </div>
        </div>
        <div className="sliders">
          <div
            className="progress"
            style={{ left: `${minLeft + "%"}`, right: `${minRight + "%"}` }}
          ></div>
        </div>
        <div className="range-input">
          <input
            type="range"
            className="range-min"
            min={0}
            max={10000}
            step={1}
            value={minValue}
            onChange={onChangeHandlerRange1}
          />
          <input
            type="range"
            className="range-max"
            min={0}
            max={10000}
            step={1}
            value={maxValue}
            onChange={onChangeHandlerRange2}
          />
        </div>
        <BrandsSelect></BrandsSelect>
      </div>

      <div className="panel-product">
        <div className="row">{ItemsCardProduct}</div>
      </div>
      
    </div>
  );
}

export default CategoryProduct;
