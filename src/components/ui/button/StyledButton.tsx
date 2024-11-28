import styled from "styled-components";

const StyledButton = styled.button`
  padding: 20px 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 700;

  border: none;
  border-radius: 10px;

  background-color: ${({ theme }) => theme.colors.secondaryColor};

  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutralColorLight};
    color: ${({ theme }) => theme.colors.black};
    box-shadow: 0 0 5px rgba(90, 90, 90, 0.5);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(90, 90, 90, 0.5);
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.neutralColorLight};
  }
`;

export default StyledButton;
