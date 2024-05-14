import "../BodyCatalog/BodyCatalog.css"
import ContentProducts from "./ContentProducts/ContentProducts";
import HeaderNameProducts from "./HeaderNameProducts/HeaderNameProducts";
import IconProducts from "./IconProducts/IconProducts";

function BodyCatalog(){
      /*elements-cats-content-
      плитка, которая содержит контент про определенной группе*/
    return(
        <div className="catalog-container-products">
            <div className="catalog-all">
                <h1>Товары</h1>
                <div className="catalog-products">
                    <div className="cats-products" >
                        <IconProducts href={"/kkk"} src={"public/BodyCatalogIcon/cat.svg"}></IconProducts>

                        <div className="element-content">
                            <HeaderNameProducts>Для кошек</HeaderNameProducts>
                            <ul>
                            <ContentProducts href={"/gg"}>Корма</ContentProducts>
                            <ContentProducts href={"gg"}>Наполнители</ContentProducts>
                            <ContentProducts href={"gg"}>Лакомства</ContentProducts>
                            <ContentProducts href={"gg"}>Амуниция</ContentProducts>
                            <ContentProducts href={"gg"}>Игрушки</ContentProducts>
                            <ContentProducts href={"gg"}>Лежаки</ContentProducts>
                            <ContentProducts href={"gg"}>Миски-поилки</ContentProducts>
                            <ContentProducts href={"gg"}>Когтеточки</ContentProducts>
                            <ContentProducts href={"gg"}>Груминг</ContentProducts>
                            <ContentProducts href={"gg"}>Антицарапки</ContentProducts>
                            <ContentProducts href={"gg"}>Питание</ContentProducts>
                            <ContentProducts href={"gg"}>Витамины</ContentProducts>
                            <ContentProducts href={"gg"}>Переноски</ContentProducts>
                            </ul>

                        </div>
                        
                    </div>

                    <div className="cats-products" >
                        <IconProducts href={"/kkk"} src={"public/BodyCatalogIcon/dog.svg"} ></IconProducts>

                        <div className="element-content">
                            <HeaderNameProducts>Для собак</HeaderNameProducts>
                            <ul>
                            <ContentProducts href={"/gg"}>Корма</ContentProducts>
                            <ContentProducts href={"gg"}>Наполнители</ContentProducts>
                            <ContentProducts href={"gg"}>Лакомства</ContentProducts>
                            <ContentProducts href={"gg"}>Амуниция</ContentProducts>
                            <ContentProducts href={"gg"}>Игрушки</ContentProducts>
                            <ContentProducts href={"gg"}>Лежаки</ContentProducts>
                            <ContentProducts href={"gg"}>Миски-поилки</ContentProducts>
                            <ContentProducts href={"gg"}>Когтеточки</ContentProducts>
                            <ContentProducts href={"gg"}>Груминг</ContentProducts>
                            <ContentProducts href={"gg"}>Антицарапки</ContentProducts>
                            <ContentProducts href={"gg"}>Питание</ContentProducts>
                            <ContentProducts href={"gg"}>Витамины</ContentProducts>
                            <ContentProducts href={"gg"}>Переноски</ContentProducts>
                            </ul>

                        </div>
                        
                    </div>

                      <div className="cats-products" >
                        <IconProducts href={"/kkk"}  src={"public/BodyCatalogIcon/aquariums.svg"}></IconProducts>

                        <div className="element-content">
                            <HeaderNameProducts>Аквариумистика</HeaderNameProducts>
                            <ul>
                            <ContentProducts href={"/gg"}>Аквариумы, террариумы</ContentProducts>
                            <ContentProducts href={"gg"}>Декор для террариумов</ContentProducts>
                            <ContentProducts href={"gg"}>Обородование для террариумов</ContentProducts>
                            <ContentProducts href={"gg"}>Корм для рыб, рептилий</ContentProducts>
                            <ContentProducts href={"gg"}>Растения</ContentProducts>
                            <ContentProducts href={"gg"}>Лекарства</ContentProducts>
                            <ContentProducts href={"gg"}>Сачки</ContentProducts>
                            <ContentProducts href={"gg"}>Термометры</ContentProducts>
                            <ContentProducts href={"gg"}>Фильтры, помпы</ContentProducts>
                            </ul>

                        </div>
   
                    </div>

                    <div className="cats-products" >
                        <IconProducts href={"/kkk"} src={"/BodyCatalogIcon/cat-product.jpg"}></IconProducts>

                        <div className="element-content">
                            <HeaderNameProducts>hhhgj </HeaderNameProducts>
                            <ul>
                            <ContentProducts href={"/gg"}>Корма</ContentProducts>
                            <ContentProducts href={"gg"}>Наполнители</ContentProducts>
                            <ContentProducts href={"gg"}>Лакомства</ContentProducts>
                            <ContentProducts href={"gg"}>Амуниция</ContentProducts>
                            <ContentProducts href={"gg"}>Игрушки</ContentProducts>
                            <ContentProducts href={"gg"}>Лежаки</ContentProducts>
                            <ContentProducts href={"gg"}>Миски-поилки</ContentProducts>
                            <ContentProducts href={"gg"}>Когтеточки</ContentProducts>
                            <ContentProducts href={"gg"}>Груминг</ContentProducts>
                            <ContentProducts href={"gg"}>Антицарапки</ContentProducts>
                            <ContentProducts href={"gg"}>Питание</ContentProducts>
                            <ContentProducts href={"gg"}>Витамины</ContentProducts>
                            <ContentProducts href={"gg"}>Переноски</ContentProducts>
                            </ul>

                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BodyCatalog;