import HeaderItem from ".//HeaderItem"
import BasketContainer from "./BasketContainer";
import Button from "./Button";
import { iconSrc } from "../data";
import Mapa from "../MiddleBody/Mapa";
import { useState } from "react";
import Slider from "../MiddleBody/Slider";

import HeaderCatalogItem from "../Header/HeaderCatalogItem/HeaderCatalogItem";

import  BodyCatalog from "../MiddleBody/BodyCatalog/BodyCatalog";
import Footer from "../Footer/Footer";
function onClick() {
  const h = document.querySelector(".select");
  h.classList.toggle("hidden");
  h.classList.toggle("open");
}

function Header() {
  const [baseAcive, setActive] = useState(false);

  function handleClick(type) {
    setActive(type);
    
  }

  return (
    <div className="header">
      <div className="top-panel-header-container">
        <div className="row-header">
          <div className="top-menu-header">
            <ul className="topline-menu">
              <HeaderItem>Вопросы</HeaderItem>
              <HeaderItem href={"ii.html"}>Заводчикам</HeaderItem>
              <HeaderItem
                href={"#"}
                onClick={onClick}
                className={"menu-shop-children"}
              >
                Магазин
                <ul className="select hidden">
                  <HeaderItem>Акции</HeaderItem>
                  <HeaderItem>Бренды</HeaderItem>
                  <HeaderItem>Контакты</HeaderItem>
                </ul>
              </HeaderItem>
              <br />
            </ul>
            <ul className="topline-menu">
              <HeaderItem>Лицензии и сертификаты</HeaderItem>
            </ul>
          </div>
        </div>
      </div>
      <div className="main-search">
        <img
          className="main-icon-header"
          src="public\Sphinx.png"
          alt="Сфинкс"
        />

        <input type="text" placeholder="Поиск" name="search" id="search" />
        <div className="search-btn">
          <button>
            <img src="public\search.svg" alt="Найти" />
          </button>
        </div>
        <div className="basket-container">
          <BasketContainer />
        </div>
      </div>
      <div className="catalog-container">
        <nav>
          <ul className="catalog">
            <HeaderCatalogItem href={"/catalog"}>Каталог</HeaderCatalogItem>
            <HeaderCatalogItem href={"/brands"}>Бренды</HeaderCatalogItem>
            <HeaderCatalogItem>Доставка</HeaderCatalogItem>
            <HeaderCatalogItem >Акции</HeaderCatalogItem>
            <HeaderCatalogItem onClick={() => handleClick(!baseAcive)} className={"catalog-items"}>
              Наши магазины
            </HeaderCatalogItem>
          </ul>
        </nav>
      </div>
      {baseAcive ? (<Mapa />) : (null)}

    

      
      
    </div>
  );
}

export default Header;
