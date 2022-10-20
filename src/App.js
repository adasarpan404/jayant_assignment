import "./App.css";
import ProductContainer from "./Components/ProductContainer";

import { productList } from "./Data/index";
function App() {
  console.log(productList);
  return (
    <div>
      {productList.data.map((product) => {
        return <ProductContainer product={product} />;
      })}
    </div>
  );
}

export default App;
