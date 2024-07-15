import Button from "./Button";
import { iconSrc } from "../data";

const urlAdress=[
     "/basket", 
     "/contrast",
     "",
     "/favorites"
]

const titles=[
     "корзина",
     "сравнение",
     "",
     "избранное"
]

function BasketContainer() {
 return(
      iconSrc.map((item, index)=>(<Button href={urlAdress[index]} title={titles[index]}  src={item}  key={index}></Button>)
 ));
  
}

export default BasketContainer;
