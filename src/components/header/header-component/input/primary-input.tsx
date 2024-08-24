// "use client";

import styled from "styled-components";
import { SearchIcon } from "@/components/ui/icons/search-icon";

const InputContainer = styled.div`
  position: relative;
  width: 400px;
  border-radius: 5px;
`;

const PrimaryInput = styled.input`
  width: 400px;

  border: 2px solid ${({ theme }) => theme.colors.neutralColor};
  border-radius: 10px;
  padding: 10px 60px 10px 20px;

  background-color: ${({ theme }) => theme.colors.bgInput};
  color: ${({ theme }) => theme.colors.primaryColor010};
  font-size: ${({ theme }) => theme.fontSizes.s};
  outline: none;
  font-weight: 500;

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutralColor};
    font-weight: 600;
  }

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primaryColor010};

    // Altere o estilo do botão ao focar no input
    & + button {
      background-color: ${({ theme }) => theme.colors.primaryColor010};
    }
  }
`;

const SearchBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  width: 58px;
  height: 100%;

  border: 1px solid ${({ theme }) => theme.colors.neutralColor};
  border-radius: 10px;

  background-color: ${({ theme }) => theme.colors.neutralColor};

  svg {
    width: 25px;
    height: 25px;
  }
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
