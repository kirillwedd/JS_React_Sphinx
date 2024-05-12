import { iconSrc } from "../data";
import { useState, useEffect } from "react";
import "../MiddleBody/Slider.css";

function Slider() {

  const [offset, setOffSet] = useState(0);
  function handleClickLeftArrow() {
    setOffSet((currentOffset) => {
      const newOfSet = currentOffset + 450;
      return Math.min(newOfSet, 0)
    });
  }

  function handleClickRightArrow() {
    setOffSet((currentOffset) => {
      const newOfSet=currentOffset-450;
      const maxOffSet=-(450*(iconSrc.length-1))
      return Math.max(newOfSet, maxOffSet);
    });
  }


  return (
    <div className="slider-container">
      <button onClick={handleClickLeftArrow}>&#8249;</button>
      <div className="slider">
        <div
          className="all-items-container"
          style={{ transform: `translateX(${offset}px)` }}
        >
          {iconSrc.map((itemSrc, index) => (
            <img key={index} src={itemSrc} />
          ))}
        </div>
      </div>
      <button onClick={handleClickRightArrow}>&#8250;</button>
    </div>
  );
}

export default Slider;
