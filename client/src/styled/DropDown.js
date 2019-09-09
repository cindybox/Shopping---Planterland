import React from "react";
import styled from "styled-components";

const DropDown = ({ item, value, specType }) => {
  const { products } = value;
  const dim = [];
  const fin = [];
  let foundProduct = products.find(p => p._id === item._id);

  if (foundProduct) {
    foundProduct.specs.forEach(s => {
      if (!dim.includes(s.dimension)) {
        dim.push(s.dimension);
      }
    });
    foundProduct.specs.forEach(s => {
      if (!fin.includes(s.finish)) {
        fin.push(s.finish);
      }
    });
  }
  return (
    <DropDownWrapper>
      <div class="dropdown">
        <button
          // onClick={onClickWishlist}
          type="button"
          className="btn dropdown-toggle btn-dropdown"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {specType === "dimensions"
            ? item.selectedSpecs.dimension
            : item.selectedSpecs.finish}
        </button>

        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {specType === "dimensions"
            ? dim.map(d => <p className="dropdown-item">{d}</p>)
            : fin.map(f => <p className="dropdown-item">{f}</p>)}
        </div>
      </div>
    </DropDownWrapper>
  );
};

const DropDownWrapper = styled.div`
  .btn-dropdown {
    text-transform: capitalize;

    border: none;

    transition: all 0.5s ease-in-out;
  }
  .btn-dropdown :focus {
    border: none;
  }
`;
export default DropDown;
