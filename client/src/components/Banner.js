import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import SearchBar from './Search/SearchBar';
import bannerbackground from '../img/planter_background.jpg';
import { TweenMax, Power2 } from 'gsap/TweenMax';

const Banner = (props) => {
	let bannerTextRef = useRef(null);

	useEffect(() => {
		let newTween = TweenMax.to(bannerTextRef, 2, {
			opacity: 1,
			height: 70,
			top: 20,
			ease: Power2.easeInOut
		});
	}, []);

	return (
		<BannerWrapper>
			<div className="banner mt-5 ">
				<img src={bannerbackground} className="banner-img" />

				<div className="row banner-text ">
					<h2
						ref={(h2) => (bannerTextRef = h2)}
						className="col-12 col-md-7 mx-auto text-capitalize p-2 text-banner px-5"
					>
						find planters that suit your vision
					</h2>

					<div className="col-12 col-md-7 mx-auto text-center mt-5 text-subbanner">
						Planterscape offers a collection of high quality planters, <br /> hand selected by our exterior
						designers.
					</div>
				</div>
			</div>
		</BannerWrapper>
	);
};

const BannerWrapper = styled.div`
	.banner {
		position: relative;
		width: 100%;
	}
	.banner-img {
		width: 100%;
		height: 560px;
		object-fit: cover;
		opacity: 0.7;
	}
	.banner-text {
		width: 100%;
		text-align: center;
		margin: 0 auto;
		position: absolute;
		color: white;
		top: 40%;
	}
	.text-subbanner {
		font-size: 1.4rem;
		font-family: "DM Serif Text", serif;
		background: rgba(0, 0, 0, 0.2);
		// color: var(--mainBlue);
	}
	.text-banner {
		background: rgba(0, 0, 0, 0.2);
		font-family: "DM Serif Text", serif;
		font-size: 3rem;
		opacity: 0;
		height: 0;
	}

	p {
		font-size: 1.3rem;
	}
	em {
		color: var(--mainNavy);
	}
	.carousel-caption {
		// top: 15% !important;
		bottom: 25% !important;
	}
	/*
    ##Device = Laptops, Desktops
  */
	@media (min-width: 1281px) {
		 {
			/*CSS */
		}
	}

	/*
    ##Device = Laptops, Desktops
    ##Screen = B/w 1025px to 1280px
  */

	@media (min-width: 1025px) and (max-width: 1280px) {
		 {
			/*CSS */
		}
	}

	/*
    ##Device = Tablets, Ipads (portrait)
    ##Screen = B/w 768px to 1024px
  */

	@media (min-width: 768px) and (max-width: 1024px) {
	}

	/*
    ##Device = Tablets, Ipads (landscape)
    ##Screen = B/w 768px to 1024px
  */

	@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
	}

	/*
    ##Device = Low Resolution Tablets, Mobiles (Landscape)
    ##Screen = B/w 481px to 767px
  */

	@media (min-width: 481px) and (max-width: 767px) {
	}

	/*
    ##Device = Most of the Smartphones Mobiles (Portrait)
    ##Screen = B/w 320px to 479px
  */

	@media (min-width: 320px) and (max-width: 480px) {
		.text-banner {
			font-size: 2rem;
		}
	}
`;

export default Banner;
