import {
  LinksContainer,
  LogoContainer,
  LogoImage,
  LogoText,
  NavbarContainer,
  SearchContainer,
  SearchIcon,
  SearchInput,
  SearchText,
  StyledLink,
} from "./styled";

import search from "../../../assets/images/search.svg";
import camera from "../../../assets/images/camera.svg";

const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <LogoImage src={camera} alt="Camera Logo" />
        <LogoText>Movies Browser</LogoText>
      </LogoContainer>

      <LinksContainer>
        <StyledLink to="/movies">Movies</StyledLink>
        <StyledLink to="/people">People</StyledLink>
      </LinksContainer>

      <SearchContainer>
        <SearchIcon src={search} alt="Search Icon" />
        <SearchText>Search movies</SearchText>
        <SearchInput type="text" />
      </SearchContainer>
    </NavbarContainer>
  );
};

export default Navbar;
