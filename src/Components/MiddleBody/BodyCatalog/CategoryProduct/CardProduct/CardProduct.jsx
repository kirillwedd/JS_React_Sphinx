import { useState, useEffect } from "react";
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


function CardProduct({product, productInCart,  indexses})
{
 
    const {ImageContent, Title, money, weight, description}=product
    const {productBasket, favoriteProduct}=useAddProductBasket();
    const addProductBasket=useAddProductBasket((state)=>state.addProductBasket)
    const addFavoriteProduct=useAddProductBasket((state)=>state.addFavoriteProduct)
    const [productFavorite, setProductFavorite]=useState([]);
    const [reting, setReting]=useState(null)

    useEffect(()=>{
        favoriteProduct;
        const isProductInFavorites = favoriteProduct.some(favorite => favorite.Title === product.Title);
        setProductFavorite(isProductInFavorites);
    }, [product.Title]);

    
  const BasketAdd = () => {

    productBasket.push(product);
    addProductBasket(productBasket);
    const updatedData=productBasket.map((item)=> ({
            ...item,
            myQuantity: item.myQuantity ? item.myQuantity : 1
    }));
    addProductBasket(updatedData)
  };

  function RatingProduct(selectedRating){
    setReting(selectedRating)
  }

  const BasketFavorites= ()=>{

   if(!favoriteProduct.find(favoriteTitle=>favoriteTitle.Title==Title))
   {
    favoriteProduct.push(product);
   }
   else
   {
    let index=favoriteProduct.findIndex(favorite=>favorite.Title === Title)
    favoriteProduct.splice(index, 1)
   }
   addFavoriteProduct(favoriteProduct);
   location.reload();

}

    return(
        <div className="product" style={{width:"400px", border:"2px solid red"}}>
            <div className="image">
                <img width="300" height="400" src={ImageContent} alt="" />
            </div>

        <div className="info">
                <h3>{Title}</h3>
                <ul className="rating">
                   {[...Array(5)].map((rating, index)=>{
                   const ratingValue = index + 1;
                   const isRated = ratingValue <= reting;
                   const starClassName = isRated ? 'star-filled' : 'star-empty';
                   return(
                  
                  <li onClick={()=>RatingProduct(ratingValue)} key={index}  className={starClassName} ><ion-icon name="star"></ion-icon></li> )}
                  )}
                </ul>
            <div className="info-weight-description">
                <dt>Вес: <span className="weight-product">{weight}</span></dt>
                <p className="description-product">{description}</p>
            </div>
            <div className="price-cart">
            <span className="price">{money}<small>₽</small></span>
            <div className="context-product">
            {productFavorite ?
            <button className="product-favorites-1" onClick={()=>BasketFavorites()} style={{color: 'red'}} >< ion-icon name="heart"  ></ion-icon></button>
            : <button className="product-favorites-2" onClick={()=>BasketFavorites()} ><ion-icon name="heart" className="" ></ion-icon></button>
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