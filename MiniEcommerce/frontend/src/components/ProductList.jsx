import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addToCart } from "../redux/cartSlice";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.productId}>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
