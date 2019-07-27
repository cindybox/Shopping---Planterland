import React from "react";
import styled from "styled-components";
import SearchBar from "./Search/SearchBar";

export default class Banner extends React.Component {
  render() {
    return (
      <BannerWrapper>
        <div
          id="carouselExampleIndicators"
          className="carousel slide mt-5"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div
              className="carousel-item active"
              style={{
                width: "100%",
                height: "560px",
                background: "var(--lightGreen)"
              }}
            />
            <div className="carousel-caption mt-3">
              <div className="row">
                <h2 className="col-12 col-md-9 text-banner mx-auto my-auto text-capitalize pb-3 border-bottom">
                  find planters that suits your vision
                </h2>

                <p className="col-12 col-md-6 mx-auto text-center mt-5">
                  Planterscape offers a collection of high quality planters,
                  hand selected by our exterior designers.
                  <br />
                  <br />
                  <em> "One Site, got it all"</em>
                </p>
                <div className="mx-auto col-12">
                  <SearchBar
                    submitSearch={this.props.submitSearch}
                    updateTerm={this.props.updateTerm}
                    searchTerm={this.props.searchTerm}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </BannerWrapper>
    );
  }
}

const BannerWrapper = styled.div`
  .text-banner {
    font-family: "DM Serif Text", serif;
    font-size: 3rem;
  }
  p {
    font-size: 1.3rem;
  }
  em {
    color: var(--mainNavy);
  }
  .carousel-caption {
    top: 15% !important;
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
