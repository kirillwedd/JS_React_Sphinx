import { useState } from "react";
import "../Basket/Basket.css"
import { useAddProductBasket } from "../CardProduct/CardProduct";



function Basket({cardProduct}) {
    const{ productBasket, addProductBasket }=useAddProductBasket();
    const [removeCard, setRemoveCard]=useState(productBasket);

    const[myQuantity, setCounter]=useState(productBasket);
    const disabledValue=1;

    function PlusCounter(index) {
        const updatedProductBasket = [...productBasket];

        if(updatedProductBasket[index].counter>updatedProductBasket[index].myQuantity)
            {
                updatedProductBasket[index].myQuantity += 1;
                addProductBasket(updatedProductBasket)
                setCounter(updatedProductBasket);

            }
    }

    function MinusCounter(index) {
        const updatedProductBasket = [...productBasket];
        if(updatedProductBasket[index].myQuantity>disabledValue)
            {
                updatedProductBasket[index].myQuantity -= 1;
                addProductBasket(updatedProductBasket)
                setCounter(updatedProductBasket);

            }
    }

    function RemoveProduct(index){
        
       let removeProductBasket=removeCard.filter((product, idx)=>idx !==index);
        addProductBasket(removeProductBasket)
        setRemoveCard(removeProductBasket)
    }



    return(
        <div className="my-basket-container"> 
        <header className="basket-title">Моя корзина</header>
        <div className="basket-products">
           {removeCard.map((item, index)=>(
            
            <div key={index} className="product-basket">
               <div><img src={item.ImageContent} height="150" alt="" className="photo-product-basket" /></div>
               <div className="product-information-basket">
               <div  className="title-product-basket">{item.Title}</div>
               <div className="money-product-basket">{item.money} <small>₽</small></div>
               <div className="communication">
                <button style={{backgroundColor:"transparent"}} title="Удалить товар" onClick={()=>RemoveProduct(index)}>
                <ion-icon name="trash"></ion-icon>
                </button>

                <div className="count-product-basket"><div className="min-count" onClick={()=>MinusCounter(index)}
                style={{backgroundColor:myQuantity[index].myQuantity==disabledValue ? "gray" : "white"}}>—</div> 
               <div className="count">{myQuantity[index].myQuantity}</div> <div onClick={()=>PlusCounter(index)}
               style={{backgroundColor:myQuantity[index].myQuantity==productBasket[index].counter ? "gray" : "white"}} className="max-count">+</div></div>
               </div> 
             
               </div>
               
            </div>
           ))}
        </div>
        </div>
    )
}

export default Basket;