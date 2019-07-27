import styled from "styled-components";

const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.2rem;
  background: ${props => (props.isGreen ? "var(--darkGreen)" : "transparent")};
  border: ${props =>
    props.isGreen ? "none" : "0.05rem solid var(--lightBlue)"};
  border-color: ${props =>
    props.cart ? "var(--mainYellow)" : "var(--mainDark)"};
  color: ${props =>
    props.cart
      ? "var(--mainYellow)"
      : props.isGreen
      ? "var(--mainWhite)"
      : "var(--mainDark)"};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  margin: 0.2rem 0.5rem 0.2rem;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: ${props =>
      props.cart ? "var(--mainYellow)" : "var(--mainDark)"};
    color: var(--mainWhite) !important;
  }
  &:focus {
    outline: none;
  }

  /*
    ##Device = Tablets, Ipads (landscape)
    ##Screen = B/w 768px to 1024px
  */

  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    //CSS
  }

  /*
    ##Device = Low Resolution Tablets, Mobiles (Landscape)
    ##Screen = B/w 481px to 767px
  */

  @media (min-width: 481px) and (max-width: 767px) {
    //CSS
  }

  /*
    ##Device = Most of the Smartphones Mobiles (Portrait)
    ##Screen = B/w 320px to 479px
  */

  @media (min-width: 320px) and (max-width: 480px) {
    //CSS
  }

  @media (max-width: 767px) {
    /* transform: scale(0.7) !important; */
    font-size: 1rem !important;
  }
`;

export default ButtonContainer;
