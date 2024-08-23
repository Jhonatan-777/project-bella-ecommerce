// "use client";

import styled from "styled-components";
import { SearchIcon } from "./search-icon";

const InputContainer = styled.div`
  position: relative;
  width: 420px;
  border-radius: 5px;
`;

const PrimaryInput = styled.input`
  width: 420px;

  border: 2px solid ${({ theme }) => theme.colors.primaryColor010};
  border-radius: 5px;
  padding: 15px 60px 15px 20px;

  background-color: ${({ theme }) => theme.colors.bgInput};
  color: ${({ theme }) => theme.colors.neutralColor};
  font-size: ${({ theme }) => theme.fontSizes.s};
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutralColorLight};
    font-weight: 600;
  }

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primaryColor010};
  }
`;

const SearchBtn = styled.button`
  position: absolute;
  right: 0;

  cursor: pointer;

  width: 58px;
  height: 100%;

  border: 1px solid ${({ theme }) => theme.colors.primaryColor010};
  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.primaryColor010};
`;

export default function PrimaryInputSearch() {
  return (
    <InputContainer>
      <PrimaryInput placeholder="o que está buscando hoje?"></PrimaryInput>
      <SearchBtn>
        <SearchIcon />
      </SearchBtn>
    </InputContainer>
  );
}
