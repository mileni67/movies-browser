import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 94px;
  background: ${({ theme }) => theme.colors.obsidianNight};
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 1;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 220px;
  height: 48px;
  padding: 4px 0;
  margin-left: 293px;
`;

export const LogoImage = styled.img`
  width: 40px;
  height: 40px;
  padding: 8.75px 4.58px;
  opacity: 1;
`;

export const LogoText = styled.span`
  width: 168px;
  height: 40px;
  font-size: 24px;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: -1.5px;
  text-align: left;
  opacity: 1;
  color: ${({ theme }) => theme.colors.white};
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 48px;
  padding: 8px 24px;
  gap: 10px;
  border-radius: 24px;
  background: transparent;
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;

  &.active {
    border: 1px solid ${({ theme }) => theme.colors.white};
  }

  &:focus {
    outline: none;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-left: 80px;
  margin-right: 250px;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 432px;
  height: 48px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.cloudyLilac};
  border-radius: 33px;
  margin-right: 292px;
  box-sizing: border-box;
  overflow: hidden;
`;

export const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  pointer-events: none;
`;

export const SearchInput = styled.input`
  flex-grow: 1;
  height: 100%;
  padding: 0 16px;
  padding-left: 48px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.darkerGrey};
  background: transparent;
  border: none;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.darkerGrey};
    text-align: left;
  }
`;
