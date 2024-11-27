import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetchIphone from "../Iphone/useFetchIphone";

const SingleAppleProduct = () => {
  const [products, setProducts] = useState([]);
  const { pid } = useParams();

  // const {products,loading } = useFetchIphone();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/iphones.json");
      // const response = await fetch("http://localhost:3001/iphones");
      const data = await response.json();
      const productList = data.products;
      const singleProduct = productList.filter((x) => x.product_url === pid);
      setProducts(singleProduct);
      // console.log(singleProduct)
    };

    fetchProducts();
  }, [pid]);

  return (
    <div>
      <section className="internal-page-wrapper top-100 mt-5">
        <div className="container">
          {products.map((product) => {
            const id = product.product_url;
            const title = product.product_name;
            const img = product.product_img;
            const brief = product.product_brief_description;
            const startPrice = product.starting_price;
            const priceRange = product.price_range;
            const details = product.product_description;

            return (
              <div key={id} className="bottom-100">
                <div className="row justify-content-center text-center bottom-50">
                  <div className="col-12">
                    <div className="title-wraper bold">{title}</div>
                    <div className="brief-description">{brief}</div>
                  </div>
                </div>

                <div className="row justify-content-center text-center product-holder h-100">
                  <div className="col-sm-12 col-md-6 my-auto">
                    <div className="starting-price">{`Starting at ${startPrice}`}</div>
                    <div className="monthly-price">{priceRange}</div>
                    <div className="product-details">{details}</div>
                  </div>

                  <div className="col-sm-12 col-md-6">
                    <div className="product-image">
                      <img src={img} alt={title} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default SingleAppleProduct;
