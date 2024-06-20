import { useEffect, useState } from "react";
import "../Basket/Basket.css";
import { useAddProductBasket } from "../CardProduct/CardProduct";

function Basket() {
  const { productBasket, addProductBasket } = useAddProductBasket();
  const [removeCard, setRemoveCard] = useState(productBasket);
  const [finalPrice, setFinalPrice]=useState(null);
  const [myQuantity, setCounter] = useState(productBasket);
  const disabledValue = 1;
 

  useEffect(()=>{
    const totalPrice= productBasket.reduce((final, product)=>final+ (product.money* product.myQuantity), 0);
    setFinalPrice(totalPrice)
  }, [productBasket])

  function PlusCounter(index) {
    

    if (
      productBasket[index].counter >
      productBasket[index].myQuantity
    ) {
      productBasket[index].myQuantity += 1;
      setCounter(productBasket);
      addProductBasket(removeCard);
      setFinalPrice(removeCard.reduce((final, product)=>final+ (product.money* product.myQuantity), 0))
    }
  }

  function MinusCounter(index) {
    if (productBasket[index].myQuantity > disabledValue) {
      productBasket[index].myQuantity -= 1;
      setCounter(productBasket);
      addProductBasket(removeCard);
      setFinalPrice(removeCard.reduce((final, product)=>final+ (product.money* product.myQuantity), 0))
    }
  }

  function RemoveProduct(index) {
    const removeProductBasket = removeCard.filter(
      (product, idx) => idx !== index
    );
    addProductBasket(removeProductBasket);
    setRemoveCard(removeProductBasket);
    setFinalPrice(removeProductBasket.reduce((final, product)=>final+ (product.money* product.myQuantity), 0))
  }

  return (
    <div className="my-basket-container">
      <header className="basket-title">Моя корзина</header>
      {removeCard.length > 0 ? (
        <div className="basket-products">
          {removeCard.map((item, index) => (
            <div key={index} className="product-basket">
              <div>
                <img
                  src={item.ImageContent}
                  height="150"
                  alt=""
                  className="photo-product-basket"
                />
              </div>
              <div className="product-information-basket">
                <div className="title-product-basket">{item.Title}</div>
                <div className="money-product-basket">
                  {item.money} <small>₽</small>
                </div>
                <div className="communication">
                  <button
                    style={{ backgroundColor: "transparent" }}
                    title="Удалить товар"
                    onClick={() => RemoveProduct(index)}
                  >
                    <ion-icon name="trash"></ion-icon>
                  </button>

                  <div className="count-product-basket">
                    <div
                      className="min-count"
                      onClick={() => MinusCounter(index)}
                      style={{
                        backgroundColor:
                          myQuantity[index].myQuantity == disabledValue
                            ? "gray"
                            : "white",
                      }}
                    >
                      —
                    </div>
                    <div className="count">{myQuantity[index].myQuantity}</div>{" "}
                    <div
                      onClick={() => PlusCounter(index)}
                      style={{
                        backgroundColor:
                          myQuantity[index].myQuantity ==
                          productBasket[index].counter
                            ? "gray"
                            : "white",
                      }}
                      className="max-count"
                    >
                      +
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          ))}
        <hr  />
        <div><span>Итоговая цена: {finalPrice}</span></div>
        
        </div>
        
      ) : (
        <div className="lack-product">
          <div>Корзина пуста</div>
           <div ><a href="/catalog">В каталог</a></div>
        </div>
      )}
    </div>
  );
}

export default Basket;
