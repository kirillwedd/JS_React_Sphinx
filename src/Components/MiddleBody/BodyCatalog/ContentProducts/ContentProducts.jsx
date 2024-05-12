function ContentProducts({children, href}){
    return(
      <li><a href={"/hh"+"/"+href+"/"} >{children + "00"}</a></li>  
    )
}

export default ContentProducts;