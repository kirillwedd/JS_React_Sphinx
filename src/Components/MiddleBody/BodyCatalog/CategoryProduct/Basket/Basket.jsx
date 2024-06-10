import "../Basket/Basket.css"
import { useAddProductBasket } from "../CardProduct/CardProduct";

function Basket({cardProduct}) {

    const{ productBasket, addProductBasket }=useAddProductBasket()

    function Counter(index) {
        productBasket[index].counter+=1;
        localStorage.setItem('productBasket', JSON.stringify(productBasket))
    }


    return(
        <div className="my-basket-container"> 
        <header className="basket-title">Моя корзина</header>
        <div className="basket-products">
           {cardProduct.map((item, index)=>(
            <div key={index} className="product-basket">
               <div><img src={item.ImageContent} height="150" alt="" className="photo-product-basket" /></div>
               <div className="product-information-basket">
               <div  className="title-product-basket">{item.Title}</div>
               <div className="money-product-basket">{item.money} <small>₽</small></div>
               <div className="count-product-basket"><div className="min-count">—</div> <div className="count">{item.counter}</div> <div onClick={()=>Counter(index)} className="max-count">+</div></div>
               </div>
               
            </div>
           ))}
        </div>
        </div>
    )
}

export default Basket;