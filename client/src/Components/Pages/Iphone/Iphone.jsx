import React from "react";
import { Link } from "react-router-dom";
import useFetchIphone from "./useFetchIphone";
import ProductDiv from "./ProductDiv";
import Spinner from "../../Spinner/Spinner";
import Empty from "../../Empity/Empity";

function Iphone() {
  const { products, loading } = useFetchIphone();
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch("/iphones.json")
  //   // fetch("http://localhost:3001/iphones")
  //     .then((res) => res.json())
  //     .then((products) => {
  //       setProducts(() => products.products);
  //     });
  // }, []);

  // console.log(products);
  return (
    <div>
      <section className="internal-page-wrapper top-100 ">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold">Iphones</div>
              <div className="brief-description">
                The best for the brightest.
              </div>
            </div>
          </div>
          {loading ? (
            <Spinner />
          ) : products.length === 0 ? (
            <Empty />
          ) : (
            products.map((product, index) => (
              <ProductDiv
                key={product.product_url}
                product={product}
                order={index % 2}
              />
            ))
          )}
        </div>
      </section>
    </div>
  );
}

export default Iphone;
