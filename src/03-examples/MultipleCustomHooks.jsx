import { Loading, ProductCard } from "../components";
import { useCounter, useFetch } from "../hooks";

export const MultipleCustomHooks = () => {
  const { counter, increment, decrement } = useCounter(1, 1);
  const { data, isLoading, hasError } = useFetch(
    `https://fakestoreapi.com/products/${counter}`
  );

  return (
    <>
      <div className="row justify-content-center">
        <h1 className="text-center">Random Product Finder</h1>
        <hr />

        {isLoading ? <Loading /> : <ProductCard productData={data} />}
      </div>
      <div className="mt-3 text-center">
        <button
          className="btn btn-primary"
          disabled={isLoading}
          onClick={() => decrement()}
        >
          Previous Product
        </button>
        <button
          className="btn btn-primary"
          disabled={isLoading}
          onClick={() => increment()}
        >
          Next Product
        </button>
      </div>
    </>
  );
};
