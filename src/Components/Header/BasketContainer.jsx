import Button from "./Button";
import { iconSrc } from "../data";

function BasketContainer() {
 return(
      iconSrc.map((item, index)=>(<Button src={item} key={index}></Button>)
 ));
  
}

export default BasketContainer;
