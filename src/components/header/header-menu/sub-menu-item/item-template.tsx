import styled from "styled-components";

export const ItemList = styled.li`
  a {
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.neutralColorStrong};
    font-size: ${({ theme }) => theme.fontSizes.s};
    outline: none;
  }
`;
