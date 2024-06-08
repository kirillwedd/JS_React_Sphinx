import { useState } from "react";
import "../CardProduct/CardProduct.css"
import { dataCardProduct } from "../../../../data";
import Basket from "../Basket/Basket";
import { create } from "zustand";
import { useFilter } from "../../../../Header/Header";



export const useAddProductBasket=create((set)=>(
    {
        productBasketArr:[],
        productBasket: JSON.parse(localStorage.getItem('productBasketArr')) || [],
        addProductBasket: newProduct => set(state=> {
            const updateProductBasket=[...state.productBasketArr, newProduct];
            localStorage.setItem('productBasketArr', JSON.stringify(updateProductBasket))
            return { productBasket: updateProductBasket}
        }),
        removeProductBasket: productBasketId => set((state)=>{
            const updateProductBasket= state.productBasket.filter(myProduct=>myProduct !==productBasketId);
            localStorage.setItem('productBasketArr', JSON.stringify(updateProductBasket))
            return { productBasket: updateProductBasket}
        }),
        
    }))


function CardProduct({product})
{
    const [buttonColor, setButtonColor] = useState('#8bc34a');
    const [buttonPadding, setButtonPadding]=useState('10px');
    const [cardProduct, setCardProduct]=useState([])
    const {ImageContent, Title, money, weight, description}=product
    const productBasket=useAddProductBasket((state)=>state.productBasket);
    const addProductBasket=useAddProductBasket((state)=>state.addProductBasket)
    const productBasketArr=useAddProductBasket((state)=>state.productBasketArr)



  const changeColor = () => {
    const newColor = buttonColor === '#8bc34a' ? 'red' : '#8bc34a';
    const newMargin= buttonPadding==="10px"?"25px": "10px"
    setButtonColor(newColor);
    setButtonPadding(newMargin);
    productBasketArr.push(product)
    addProductBasket(productBasketArr)
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
            <button  style={{background: buttonColor, borderRadius: buttonPadding}} product={product} onClick={changeColor} className="add-to-cart"><ion-icon name="cart"></ion-icon></button>
            </div>
            
        </div>
    </div>
    )
}
export default CardProduct;