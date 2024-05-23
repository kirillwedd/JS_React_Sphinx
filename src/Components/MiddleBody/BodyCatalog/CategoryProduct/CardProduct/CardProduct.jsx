function CardProduct()
{
    return(
        <div className="product">
            <div className="image">
                <img width="300" height="400" src="" alt="" />
            </div>

            <div className="info">
                <h3>Название товара</h3>
                <ul className="rating">
                    <li><ion-icon name="star"></ion-icon></li>
                    <li><ion-icon name="star"></ion-icon></li>
                    <li><ion-icon name="star"></ion-icon></li>
                    <li><ion-icon name="star"></ion-icon></li>
                    <li><ion-icon name="star-half"></ion-icon></li>
                </ul>
            <div className="info-price">
                <span className="price">230<small>₽</small></span>
                <button className="add-to-cart"><ion-icon name="cart"></ion-icon></button>
            </div>
        </div>
    </div>
    )
}