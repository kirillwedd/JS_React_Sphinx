import "../ContentProducts/ContentProducts.css"

function ContentProducts({children, href}){
    return(
      <li><a href={href} >{children}</a></li>  
    )
}

export default ContentProducts;