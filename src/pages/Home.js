import ProductList from "../features/product/components/ProductList";
import NavBar from "../features/navbar/Navbar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <NavBar>
        <ProductList></ProductList>
      </NavBar>
     
    </div>
  );
}

export default Home;