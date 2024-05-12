import "./HeaderItem.css"



function HeaderItem({ children, href,  onClick, isActive    }) {
    return (
      
        <li className={isActive ? 'catalog-items active-catalog' : 'catalog-items' } onClick={onClick}><a href={href}>{children}</a></li>
      
    );
  }
  
  export default HeaderItem;