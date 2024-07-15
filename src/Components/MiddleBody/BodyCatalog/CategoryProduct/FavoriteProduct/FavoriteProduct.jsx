import { useAddProductBasket } from "../CardProduct/CardProduct";
import CardProduct from "../CardProduct/CardProduct";
import "../CategoryProduct.css";

function FavoriteProduct({ favoriteCard }) {
  const { AddFavoriteProduct, productBasket } = useAddProductBasket();

  return (
    <div className="panel-product">
      <div className="row">
        {favoriteCard.map((favorite, index)=>(
            <CardProduct product={favorite} productInCart={productBasket.some(item=>item.Title==favorite.Title)}></CardProduct>
        ))}
      </div>
    </div>
  );
}

export default FavoriteProduct;
