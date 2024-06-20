import { useState } from "react";
import "../CardProduct/CardProduct.css"
import { dataCardProduct } from "../../../../data";
import Basket from "../Basket/Basket";
import { create } from "zustand";
import { useFilter } from "../../../../Header/Header";



export const useAddProductBasket=create((set)=>(
    {
       
        productBasket: JSON.parse(localStorage.getItem('productBasket')) || [],
        favoriteProduct: JSON.parse(localStorage.getItem('favoriteProduct')) || [],
        addProductBasket: (newProduct) => set({
        productBasketArr: localStorage.setItem('productBasket', JSON.stringify(newProduct))
        }),
        addFavoriteProduct: (newProduct) => set({
            favoriteProductArr: localStorage.setItem('favoriteProduct', JSON.stringify(newProduct))
            }),
    
        
    }))


function CardProduct({product, productInCart, productFavorite, indexses})
{
 
    const {ImageContent, Title, money, weight, description}=product
    const {productBasket, favoriteProduct}=useAddProductBasket();
    const addProductBasket=useAddProductBasket((state)=>state.addProductBasket)
    const addFavoriteProduct=useAddProductBasket((state)=>state.addFavoriteProduct)
    const [isFavorite, setIsFavorite] = useState(false);
  



  const BasketAdd = () => {

   
    productBasket.push(product);
    addProductBasket(productBasket);
    const updatedData=productBasket.map((item)=> ({
            ...item,
            myQuantity: item.myQuantity ? item.myQuantity : 1
    }));

    addProductBasket(updatedData)
    console.log(productBasket)    
  };

  const BasketFavorites=(indexses)=>{

    if(isFavorite)
    {
        const removeFavorite = favoriteProduct.filter(
            (product, idx) => idx !== indexses
        );
        addFavoriteProduct(removeFavorite)
    }
    else
    {
    favoriteProduct.push(product);
    addFavoriteProduct(favoriteProduct);
    const favoritesData=favoriteProduct.map((item)=>({
    ...item,
    favorite: true
    }))
    addFavoriteProduct(favoritesData);
    }
    setIsFavorite(prevState => !prevState);
}

  
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
            <div className="context-product">
            {productFavorite ?
            <button className="product-favorites-1" onClick={()=>BasketFavorites(indexses)} style={{color: 'red'}} >< ion-icon name="heart"  ></ion-icon></button>
            : <button className="product-favorites-2" onClick={()=>BasketFavorites(indexses)} ><ion-icon name="heart" className="" ></ion-icon></button>
             }
            
            { productInCart ?
            "Товар в корзине"
            :<button  product={product} onClick={BasketAdd}  className="add-to-cart"><ion-icon name="cart"></ion-icon></button>
            }
            </div>
           
            </div>
            
        </div>
    </div>
    )
}
export default CardProduct;