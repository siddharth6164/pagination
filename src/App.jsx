import { useEffect, useState } from "react";
import "./App.css";

// ---------------------- ProductCard ----------------------
const ProductCard = ({ image, title }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <span>{title}</span>
    </div>
  );
};
// ---------------------------------------------------------

const PAGE_SIZE = 10;

function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const json = await data.json();
    setProducts(json.products);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const totalProducts = products.length;
  const noOfPage = Math.ceil(totalProducts / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const handlePageChange = (n) => {
    setCurrentPage(n);
  };
  const goToNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const goToPrevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };
  return !products.length ? (
    <h1>No Products Found</h1>
  ) : (
    <div className="App">
      <h1>Pagination</h1>
      <div className="pageination-container">
        <button
          className="page-number"
          disabled={currentPage == 0}
          onClick={() => goToPrevPage()}
        >
          ⬅️
        </button>
        {[...Array(noOfPage).keys()].map((n) => (
          <button
            key={n}
            className={"page-number " + (n === currentPage ? "active" : "")}
            onClick={() => handlePageChange(n)}
          >
            {n}
          </button>
        ))}
        <button
          className="page-number"
          disabled={currentPage == noOfPage - 1}
          onClick={() => goToNextPage()}
        >
          ➡️
        </button>
      </div>
      <div className="products-conatiner">
        {products.slice(start, end).map((items) => (
          <ProductCard
            key={items.id}
            image={items.thumbnail}
            title={items.title}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
