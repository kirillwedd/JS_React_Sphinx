import  './/HeaderCatalogItem.css'

function HeaderCatalogItem({ children, href,  onClick, isActive    }){
    return(
        <a onClick={onClick} className={isActive ? 'catalog-items active-catalog' : 'catalog-items' } href={href}>{children}</a>
    )
}

export default HeaderCatalogItem;