import { useEffect, useRef, useState } from "react";
import Product from "./Product";

const productsPerPage = 10;

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `https://dummyjson.com/products?limit=${productsPerPage}&skip=${
          page * productsPerPage
        }`,
      );

      const data = await response.json();

      if (data.products.length === 0) {
        setHasMore(false);
      } else {
        setProducts((prevProducts) => [...prevProducts, ...data.products]);
        setPage((prevPage) => prevPage + 1);
      }
    };

    const onIntersection = (items) => {
      const loaderItem = items[0];

      if (loaderItem.isIntersecting && hasMore) {
        fetchProducts();
      }
    };

    const observer = new IntersectionObserver(onIntersection);

    if (observer && loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    // cleanup
    return () => {
      if (observer) observer.disconnect();
    };
  }, [hasMore, page]);

  return (
    <div>
      <div>Product List</div>

      {products.map((product) => (
        <Product
          title={product.title}
          price={product.price}
          thumbnail={product.thumbnail}
          key={product.id}
        />
      ))}

      {/*Loading div */}
      {hasMore && (
        <div ref={loaderRef}>
          <div className="flex items-center justify-center p-4">
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-gray-300 border-t-blue-600">
              Loading...
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
