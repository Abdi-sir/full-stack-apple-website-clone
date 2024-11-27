import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center my-5">
      <div
        className="spinner-border text-primary"
        role="status"
        style={{ width: "3rem", height: "3rem" }}
      />
    </div>
  );
};

export default Spinner;
