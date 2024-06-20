import "./FooterItem.css"


function FooterItem({children, src, className, title}){
    return(
       <>
       <span className={className}><img title={title} style={{height:"25px"}} src={src}/>{children}</span> 
       </>
        
    )
}

export default FooterItem;