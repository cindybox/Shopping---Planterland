import React from "react";

const SearchBar = props => (
  <div>
    <form onSubmit={props.submitSearch}>
      <input
        value={props.searchTerm}
        onChange={props.updateTerm}
        placeholder="Search For Planter Name, Material, and Manufacturer"
        className="col-10 col-md-8 col-lg-6 mt-3"
      />

      <button
        className="landingbutton"
        onClick={props.submitSearch}
        variant="outline-secondary"
      >
        <i className="fas fa-search" />{" "}
      </button>
    </form>
  </div>
);
export default SearchBar;
