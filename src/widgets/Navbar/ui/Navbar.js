import {
  LinksContainer,
  LogoContainer,
  LogoImage,
  LogoText,
  NavbarContainer,
  SearchContainer,
  SearchIcon,
  SearchInput,
  StyledLink,
} from "./styled";

import { useLocation } from "react-router-dom";
import search from "../../../assets/images/search.svg";
import camera from "../../../assets/images/camera.svg";

const Navbar = () => {
  const location = useLocation();

  return (
    <NavbarContainer>
      <LogoContainer>
        <LogoImage src={camera} alt="Camera Logo" />
        <LogoText>Movies Browser</LogoText>
      </LogoContainer>

      <LinksContainer>
        <StyledLink
          to="/movies"
          className={location.pathname === "/movies" ? "active" : ""}
        >
          Movies
        </StyledLink>
        <StyledLink
          to="/people"
          className={location.pathname === "/people" ? "active" : ""}
        >
          People
        </StyledLink>
      </LinksContainer>

      <SearchContainer>
        <SearchIcon src={search} alt="Search Icon" />
        <SearchInput type="text" placeholder="Search movies..." />
      </SearchContainer>
    </NavbarContainer>
  );
};

export default Navbar;
