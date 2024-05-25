import { useState } from "react";
import "../CategoryProduct/CategoryProduct.css";
import BrandsSelect from "./BrandsSelect/BrandsSelect";
import { dataCardProduct } from "../../../data";
import CardProduct from "./CardProduct/CardProduct";


const ItemsCardProduct = dataCardProduct.map((item, index)=>(
<CardProduct srcImage={item.ImageContent}
             title={item.Title}
             money={item.money}
             descriptionProduct={item.description}
             weightProduct={item.weight}
             key={index}>

</CardProduct>
))

function CategoryProduct() {
  const [minValue, setValue] = useState(2500);
  const [minLeft, setLeft] = useState(25);
  const [minRight, setRight] = useState(25);
  const [minValue2, setValue2] = useState(7500);
  // Сделать состояние специальное для left right

  const onChangeHandlerRange1 = (event) => {
    if (minValue.valueOf() < minValue2.valueOf()) {
      setValue(event.target.value);
    } else {
      setValue(2500);
    }

    setLeft(() => {
      const progressLeft = minValue / 100;
      return progressLeft;
    });
  };

  const onChangeHandlerRange2 = (event) => {
    if (minValue2.valueOf() > minValue.valueOf()) {
      setValue2(event.target.value);
    } else {
      setValue2(7500);
    }

    setRight(() => {
      const progressRight = 100 - minValue2 / 100;
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
              value={minValue2}
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
            value={minValue2}
            onChange={onChangeHandlerRange2}
          />
        </div>
        <BrandsSelect></BrandsSelect>
      </div>

      <div className="panel-product">
        <div className="row">
          {ItemsCardProduct}
        </div>
      </div>
    </div>
  );
}

export default CategoryProduct;
