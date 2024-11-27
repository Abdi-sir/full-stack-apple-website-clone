import React from "react";
import { Link } from "react-router-dom";

import "./Four04.css";

function Four04() {
  return (
    <div className="four04-wrapper">
      <section className="internal-page-wrapper d-flex align-items-center justify-content-center text-center">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-12">
              
              <h1 className="display-4">404 - Page Not Found</h1>
              <p className="lead">
                Oops! The page you’re looking for doesn’t seem to exist.
              </p>
              <Link to="/" className="btn btn-primary mt-4">
                Go Back Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Four04;
