import "../Basket/Basket.css"


function Basket({cardProduct}) {
    return(
        <div className="my-basket-container"> 
        <header className="basket-title">Моя корзина</header>
        <div className="basket-products">
           {cardProduct.map(item=>(
            <div className="product">
                <span>{item.Title}</span>
                <span>{item.money}</span>
            </div>
           ))}
        </div>
        </div>
    )
}

export default Basket;