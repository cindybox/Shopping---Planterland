import React from "react";
import Product from "../Product.js";
const SearchResult = props => (
  <div className="py-5">
    <div className="container">
      <div className="row mt-5">
        <div className="col-10 ml-5 my-5 text-left">
          <h5 className="text-muted">
            There are <span> {props.productList.length}</span> Search Results
            for "
            <span>
              <strong> {props.searchTerm} </strong>
            </span>
            "
          </h5>
        </div>
      </div>

      <div className="row">
        {props.productList.map(item => (
          <Product key={item.title + "search"} item={item} />
        ))}
      </div>
    </div>
  </div>
);

export default SearchResult;
