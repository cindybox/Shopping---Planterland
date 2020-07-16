import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const SearchBar = (props) => {
	return (
		<SearchBarWrapper>
			<form onSubmit={props.submitSearch}>
				<div className="row searchbar-container">
					<div className="d-flex  align-items-center col-sm-12 col-10 mx-auto ">
						<i className="fas fa-search mr-3 searchbar-icon" />
						<input
							value={props.searchTerm}
							onChange={props.updateTerm}
							placeholder="Search For Name, Material, and Manufacturer"
							className="  searchbar-input flex-grow-1 p-4 pl-5"
						/>
						{/* <div
							className="searchbar-button mx-auto my-auto m-2 text-center d-flex align-items-center"
							onClick={props.submitSearch}
						>
							<p className="mx-auto my-auto  "> GO</p>
						</div> */}
					</div>
				</div>
			</form>
		</SearchBarWrapper>
	);
};

const SearchBarWrapper = styled.div`
	.searchbar-container {
		position: relative;
	}
	.searchbar-input:focus {
		background: rgba(159, 196, 97, 0.9);
	}
	.searchbar-input {
		border-radius: 9999px;
		background: rgba(159, 196, 97, 0.8);

		border: none;
		outline: none;
		height: 3rem;
		color: var(--mainWhite);
	}
	.searchbar-icon {
		position: absolute;
		left: 2rem;
		color: var(--mainWhite);
	}
	.searchbar-button {
		z-index: 4;
		background-color: var(--mainWhite);
		position: absolute;
		right: 1.5rem;
		width: 6rem;
		border-radius: 9999px;
		height: auto;
		color: var(--lightGreen);
		font-weight: 700;
		font-size: 1.3rem;
		box-shadow: 3px 3px 2px 0 rgba(0, 0, 0, 0.1) -3px -3px 2px 0 rgba(0, 0, 0, 0.1);
	}

	.searchbar-button:hover {
		cursor: pointer;
		background: var(--greyMuted);
		color: var(--darkGreen);
	}
`;

export default SearchBar;
