import { useEffect, useState } from "react";
import "./App.css";


// ---------------------- ProductCard ----------------------
const ProductCard = ({image,title})=>{
  return <div className="product-card">
    <img src={image} alt={title} className="product-image"/>
    <span>{title}</span>
  </div>
}
// ---------------------------------------------------------






function App() {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const json = await data.json();
    setProducts(json.products);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return !products.length ? (
    <h1>No Products Found</h1>
  ) : (
      <div className="App">
        <h1>Pagination</h1>
        {products.map(items=><ProductCard key={items.id} image={items.thumbnail} title={items.title}/>)}
      </div>
  );
}

export default App;
