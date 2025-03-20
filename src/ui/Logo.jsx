import { Link } from "react-router";
import styled from "styled-components";

const StyledLink = styled(Link)`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const Img = styled.img``;

const Logo = () => {
  return <StyledLink to="/"></StyledLink>;
};

export default Logo;
