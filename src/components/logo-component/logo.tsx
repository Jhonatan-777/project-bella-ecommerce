import styled from "styled-components";

export const Logo = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.primaryColor010};

  span {
    color: ${({ theme }) => theme.colors.secondaryColor};
  }
`;
