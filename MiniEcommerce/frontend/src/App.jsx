import ProductList from "./components/ProductList.jsx"; 
import Cart from "./components/Cart.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <h1>Mini E-commerce Cart System</h1>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
