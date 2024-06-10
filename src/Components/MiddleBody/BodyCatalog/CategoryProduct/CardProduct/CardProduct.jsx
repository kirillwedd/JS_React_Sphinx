import { useState } from "react";
import "../CardProduct/CardProduct.css"
import { dataCardProduct } from "../../../../data";
import Basket from "../Basket/Basket";
import { create } from "zustand";
import { useFilter } from "../../../../Header/Header";



export const useAddProductBasket=create((set)=>(
    {
       
        productBasket: JSON.parse(localStorage.getItem('productBasket')) || [],
        addProductBasket: (newProduct) => set({
        productBasketArr: localStorage.setItem('productBasket', JSON.stringify(newProduct))
        }),
        removeProductBasket: productBasketId => set((state)=>{
            const updateProductBasket= state.productBasket.filter(myProduct=>myProduct !==productBasketId);
            localStorage.setItem('productBasket', JSON.stringify(updateProductBasket))
            return { productBasket: updateProductBasket}
        }),
        
    }))


function CardProduct({product, productInCart})
{
    const [buttonColor, setButtonColor] = useState('#8bc34a');
    const [buttonPadding, setButtonPadding]=useState('10px');
    const {ImageContent, Title, money, weight, description}=product
    const productBasket=useAddProductBasket((state)=>state.productBasket);
    const addProductBasket=useAddProductBasket((state)=>state.addProductBasket)
  



  const changeColor = () => {
    const newColor = buttonColor === '#8bc34a' ? 'red' : '#8bc34a';
    const newMargin= buttonPadding==="10px"?"25px": "10px"
    setButtonColor(newColor);
    setButtonPadding(newMargin);
    productBasket.push(product)
    addProductBasket(productBasket)
    console.log(productBasket)

    

    
    
  };

  


    return(
        <div className="product" style={{width:"400px", border:"2px solid red"}}>
            <div className="image">
                <img width="300" height="400" src={ImageContent} alt="" />
            </div>

        <div className="info">
                <h3>{Title}</h3>
                <ul className="rating">
                    <li><ion-icon name="star"></ion-icon></li>
                    <li><ion-icon name="star"></ion-icon></li>
                    <li><ion-icon name="star"></ion-icon></li>
                    <li><ion-icon name="star"></ion-icon></li>
                    <li><ion-icon name="star-half"></ion-icon></li>
                </ul>
            <div className="info-weight-description">
                <dt>Вес: <span className="weight-product">{weight}</span></dt>
                <p className="description-product">{description}</p>
            </div>
            <div className="price-cart">
            <span className="price">{money}<small>₽</small></span>
            { productInCart ?
            "Товар в корзине"
            :<button  style={{background: buttonColor, borderRadius: buttonPadding}} product={product} onClick={changeColor} className="add-to-cart"><ion-icon name="cart"></ion-icon></button>
            }
            </div>
            
        </div>
    </div>
    )
}
export default CardProduct;