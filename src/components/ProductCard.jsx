export const ProductCard = ({ productData }) => {
  const { id, title, price, description, category, image } = productData;

  return (
    <div className="card text-center col-7 col-md-5" prod-id={id}>
      <img className="card-img-top" src={image} alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {description && <p className="card-text">{description}</p>}
        {category && <p className="card-text">{category}</p>}
        <p className="card-text">$ {price}</p>
      </div>
    </div>
  );
};
