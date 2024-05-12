import "../BodyCatalog/BodyCatalog.css"
import ContentProducts from "./ContentProducts/ContentProducts";
import HeaderNameProducts from "./HeaderNameProducts/HeaderNameProducts";

function BodyCatalog(){
    return(
        <div className="catalog-container-products">
            <div className="catalog-all">
                <h1>Товары</h1>
                <div className="catalog-products">
                    <div className="cats-products" >
                        <div className="icon-cats-products">
                            <img src="public\BodyCatalogIcon\cat-product.jpg"/>
                        </div>

                        <div className="element-cats-content">
                            <HeaderNameProducts>hhhgj </HeaderNameProducts>
                            <ContentProducts href={"gg"}>okiooi</ContentProducts>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BodyCatalog;