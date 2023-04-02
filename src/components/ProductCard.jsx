import { useState, useRef, useLayoutEffect } from "react";

export const ProductCard = ({ productData }) => {
  const { id, title, price, description, category, image } = productData;
  const [cardSize, setCardSize] = useState({ width: 0, height: 0 });

  const cardRef = useRef();
  useLayoutEffect(() => {
    const { width, height } = cardRef.current.getBoundingClientRect();
    setCardSize({ width, height });
  }, []);

  return (
    <div ref={cardRef} className="card text-center col-7 col-md-5" prod-id={id}>
      <img className="card-img-top" src={image} alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {description && <p className="card-text">{description}</p>}
        {category && <p className="card-text">{category}</p>}
        <p className="card-text">$ {price}</p>
      </div>
      <code>{JSON.stringify(cardSize)}</code>
    </div>
  );
};
