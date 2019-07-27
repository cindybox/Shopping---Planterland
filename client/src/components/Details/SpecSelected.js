import React from "react";
import styled from "styled-components";

export const SpecSelected = ({ SpecSelection }) => {
  let {
    selectedSpec,
    specs,
    count,
    id,
    decrement,
    increment,
    removeItem
  } = SpecSelection;
  let { dimension, finish } = selectedSpec;

  return (
    <div className="col-10 mx-auto border-top p-5">
      <div className="row mx-auto">
        <div className="col-6" />
        <div className="col-6 mx-auto">
          <div className="text-specoption mb-2">
            <span> Selected Dimension:&emsp; </span>
            {dimension}
          </div>
          <div className="text-specoption mb-2">
            <span>Selected Finish:&emsp; </span>
            {finish}
          </div>
          <div className="text-specoption mb-2">
            <span>Quantity:&emsp; </span>

            <span className="btn btn-black mx-1" onClick={() => decrement(id)}>
              -
            </span>
            <span className="text-bright mx-2"> {count} </span>
            <span className="btn btn-black mx-1" onClick={() => increment(id)}>
              +
            </span>
          </div>
          <div className="text-specoption mb-2">
            <span>Price:&emsp; </span>
            {dimension !== "" && finish !== "" ? (
              specs.find(
                s =>
                  s.dimension.toLowerCase() === dimension &&
                  s.finish.toLowerCase() === finish
              ).price
            ) : (
              <span />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
