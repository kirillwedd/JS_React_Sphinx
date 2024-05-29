import { useState } from "react";
import "../CardProduct/CardProduct.css"


function CardProduct({srcImage, title, money, weightProduct, descriptionProduct})
{
    const [buttonColor, setButtonColor] = useState('#8bc34a');
    const [buttonPadding, setButtonPadding]=useState('10px');

 
  const changeColor = () => {
    const newColor = buttonColor === '#8bc34a' ? 'red' : '#8bc34a';
    const newMargin= buttonPadding==="10px"?"25px": "10px"
    setButtonColor(newColor);
    setButtonPadding(newMargin);
  };

    return(
        <div className="product" style={{width:"400px", border:"2px solid red"}}>
            <div className="image">
                <img width="300" height="400" src={srcImage} alt="" />
            </div>

        <div className="info">
                <h3>{title}</h3>
                <ul className="rating">
                    <li><ion-icon name="star"></ion-icon></li>
                    <li><ion-icon name="star"></ion-icon></li>
                    <li><ion-icon name="star"></ion-icon></li>
                    <li><ion-icon name="star"></ion-icon></li>
                    <li><ion-icon name="star-half"></ion-icon></li>
                </ul>
            <div className="info-weight-description">
                <dt>Вес: <span className="weight-product">{weightProduct}</span></dt>
                <p className="description-product">{descriptionProduct}</p>
            </div>
            <div className="price-cart">
            <span className="price">{money}<small>₽</small></span>
            <button  style={{background: buttonColor, borderRadius: buttonPadding}} onClick={changeColor} className="add-to-cart"><ion-icon name="cart"></ion-icon></button>
            </div>
        </div>
    </div>
    )
}
export default CardProduct;