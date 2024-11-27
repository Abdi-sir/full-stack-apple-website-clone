import { useState, useEffect } from "react";

function useFetchIphone() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch("http://localhost:3001/iphones");
    fetch("/iphones.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return { products, loading };
}

export default useFetchIphone;
