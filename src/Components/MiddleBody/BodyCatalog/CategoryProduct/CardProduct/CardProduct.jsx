function CardProduct({srcImage, title, money, weightProduct, descriptionProduct})
{
    return(
        <div className="product">
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
            <div className="info-price">
                <span className="weight-product">{weightProduct}</span>
                <p className="description-product">{descriptionProduct}</p>
                <span className="price">{money}<small>₽</small></span>
                <button className="add-to-cart"><ion-icon name="cart"></ion-icon></button>
            </div>
        </div>
    </div>
    )
}