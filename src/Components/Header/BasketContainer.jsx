import Button from "./Button";
import { iconSrc } from "../data";

const urlAdress=[
     "/basket", 
     "/contrast",
     "",
     "/favorites"
]

function BasketContainer() {
 return(
      iconSrc.map((item, index)=>(<Button href={urlAdress[index]} title={urlAdress[index]}  src={item}  key={index}></Button>)
 ));
  
}

export default BasketContainer;
