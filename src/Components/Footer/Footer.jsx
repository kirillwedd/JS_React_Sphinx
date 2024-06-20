import FooterItem from "./FooterItem";
import "./Footer.css";
import { footerDescription} from "../data"

function Footer(){
    return(
  <div className="footer"> 
        <div className="content-footer">
            <img className="sphinx-footer" src="public\Sphinx.png"  />
            <p>
             {footerDescription[0].title + footerDescription[0].description}
            </p>
            <div>
           <a href="https://vk.com/spinx74"> <FooterItem title={"Вконтакте"} className={"footer-networks"}  src={"public/vk-footer-icon.svg"}/></a>
            <FooterItem title={"Instagram"} className={"footer-networks"} src={"public/instagram-footer-icon.svg"}/>
            </div>
        </div>
        

        
        <div className="content-footer">
            <h3>Наши контакты<hr/></h3>
    
            <FooterItem src={"public/phone-footer-icon.svg"}>номер телефона</FooterItem>
            <FooterItem src={"public/phone-footer-icon.svg"}>номер телефона</FooterItem>
            <FooterItem src={"public/mail-icon.svg"}>Электронная почта</FooterItem>   
            <FooterItem src={"public/clock-icon.svg"}>Ежедневно с 9-00 до 20-00</FooterItem>   
            <FooterItem className={"adress"} src={"public/marker-icon.svg"}>Адрес </FooterItem>   
        
        
        </div>

        <div className="content-footer">
            <h3>Информация<hr/></h3>
    
            <FooterItem>&raquo; О нас</FooterItem>
           <a target="_blank"  href="https://vk.com/wall-151056947_1212?w=wall-151056947_1212"><FooterItem>&raquo; О доставке </FooterItem></a>
            <FooterItem>&raquo; Производители</FooterItem>
            <FooterItem>&raquo; Акции</FooterItem>
            
       
        
        </div>
        
  </div>
    )
}

export default Footer;

