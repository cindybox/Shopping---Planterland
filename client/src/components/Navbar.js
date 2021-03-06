import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import SearchBar from './Search/SearchBar';

class Navbar extends Component {
	state = { collapsed: false };

	toggleCollapse = () => {
		this.setState({ collapsed: !this.state.collapsed });
	};

	render() {
		return (
			<ProductConsumer>
				{(value) => {
					const { isLoggedIn, currentUser, logout, submitSearch, updateTerm, searchTerm } = value;
					const { username } = currentUser;

					return (
						<NavWrapper id="navwrapper" className="fixed-top" pathname={this.props.pathname}>
							<nav className="navbar navbar-expand-lg navbar-light d-flex">
								<Link className="nav-brand ml-sm-0 ml-md-5 my-2" to="/">
									<img
										src={process.env.PUBLIC_URL + '/image/logo.png'}
										alt="store"
										className="navbar-brand"
										style={{ width: '3rem' }}
									/>
								</Link>
								<div className="flex-grow-1">
									<SearchBar
										submitSearch={submitSearch}
										updateTerm={updateTerm}
										searchTerm={searchTerm}
										className="flex-grow-1"
									/>
								</div>

								<button
									className="navbar-toggler my-2"
									type="button"
									data-toggle="collapse"
									data-target="#navbarTogglerList"
									aria-controls="navbarTogglerList"
									aria-expanded="false"
									aria-label="Toggle navigation"
									onClick={this.toggleCollapse}
								>
									<span>
										{this.state.collapsed ? <i class="fas fa-times" /> : <i class="fas fa-bars" />}
									</span>
								</button>

								<div className="collapse navbar-collapse my-2" id="navbarTogglerList">
									<ul className="navbar-nav ml-lg-auto mr-lg-5 mt-2 mt-lg-0">
										<li className="nav-item ml-lg-5">
											<Link to="/wishlist" className="nav-link wishlist text-center">
												COLLECTION
											</Link>
										</li>

										{isLoggedIn ? (
											<div className="d-block d-md-flex text-center justify-content-center align-items-center">
												<li
													className="nav-item ml-lg-5 align-items-center"
													style={{
														color: 'rgb(47, 172, 226)',
														fontSize: '1.5rem'
													}}
												>
													Hi&ensp;<span>{username}</span>
												</li>
												<li className="d-none d-md-inline-block d-lg-none">&emsp;</li>
												<li className="nav-item ml-lg-5">
													<div className="nav-link logout" onClick={logout}>
														LOG OUT
													</div>
												</li>
											</div>
										) : (
											<div className="d-block d-md-flex text-center justify-content-center">
												<li className="nav-item ml-lg-5">
													<Link to="/login" className="nav-link login">
														LOG IN
													</Link>
												</li>
												<li className="d-none d-md-inline-block d-lg-none"> &emsp;</li>
												<li className="nav-item ml-lg-5">
													<Link to="/signup" className="nav-link signup">
														SINGUP
													</Link>
												</li>
											</div>
										)}

										<li className=" nav-item ml-lg-5">
											<Link to="/cart" className="nav-link cart text-center">
												CART
											</Link>
										</li>
									</ul>
								</div>
							</nav>
						</NavWrapper>
					);
				}}
			</ProductConsumer>
		);
	}
}

const NavWrapper = styled.nav`
	background: var(--mainWhite) !important;
	font-family: "Arial", sans-serif !important;
	font-weight: bold;
	.nav-link:hover {
		color: var(--darkGreen) !important;
		/* border-bottom: 4px var(--mainNavy) solid; */
	}
	.nav-link {
		color: var(--mainNavy) !important;
		font-size: 1.2rem;
		text-transform: text-capitalize !important;
		transition: color 0.15s ease-in-out;
	}

	.wishlist {
		color: ${(props) =>
			props.pathname === 'wishlist' ? 'var(--darkGreen)!important' : 'var(--mainNavy)!important'};
	}

	.login {
		color: ${(props) => (props.pathname === 'login' ? 'var(--darkGreen)!important' : 'var(--mainNavy)!important')};
	}

	.signup {
		color: ${(props) => (props.pathname === 'signup' ? 'var(--darkGreen)!important' : 'var(--mainNavy)!important')};
	}

	.cart {
		color: ${(props) => (props.pathname === 'cart' ? 'var(--darkGreen)!important' : 'var(--mainNavy)!important')};
	}
`;

export default Navbar;
