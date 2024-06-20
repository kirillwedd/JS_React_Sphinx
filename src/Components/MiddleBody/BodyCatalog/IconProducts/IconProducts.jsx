import "../IconProducts/IconProducts.css"


function IconProducts({href, src}) {
  return (
    <div className="icon-products">
      <a href={href}>
        <img src={src} />
      </a>
    </div>
  );
}

export default IconProducts;
