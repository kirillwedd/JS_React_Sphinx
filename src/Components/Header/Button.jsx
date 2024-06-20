function Button({src, href, title} ) {
    return(
       <a href={href} title={title}><img  src={src} style={{ height:"25px"}}/></a>
    );
}

export default Button;