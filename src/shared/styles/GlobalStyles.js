import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html {
    box-sizing: border-box;
}

*, ::after, ::before {
    box-sizing: inherit;
}

body {
    background-color: ${({ theme }) => theme.colors.icyCloud};
    font-family: "Poppins";
}
`;
