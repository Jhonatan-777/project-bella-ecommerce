"use client";

import styled from "styled-components";
import { flex, limitWidth } from "@/app/styles/mixins";

const ContainerNewsletter = styled.section`
  width: 100%;
  ${flex("center", "center")};
  flex-direction: column;
  padding: 40px 0;
  background-color: ${({ theme }) => theme.colors.primaryColorMoreLight};

  .limit-container {
    width: 90%;
    ${limitWidth}
    ${flex("space-between", "center")};
    flex-wrap: wrap;
    gap: 20px;
  }
`;

const NewsLetterText = styled.div`
  width: 400px;
  color: ${({ theme }) => theme.colors.neutralColorStrong};

  .titulo {
    font-size: ${({ theme }) => theme.fontSizes.l};
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1.5px;
    margin-bottom: 10px;
  }

  .desc {
    font-size: ${({ theme }) => theme.fontSizes.s};
    font-weight: 400;
    letter-spacing: 1.1px;

    .span-politica {
      font-weight: 500;
      text-decoration: underline;
    }
  }
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  border-radius: 5px;
`;

const InputCadastro = styled.input`
  width: 100%;

  border: 2px solid ${({ theme }) => theme.colors.neutralColor};
  border-radius: 10px;
  padding: 10px 200px 10px 20px;

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

  padding: 13px 50px;

  border: none;
  border-radius: 10px;

  background-color: ${({ theme }) => theme.colors.neutralColor};

  font-size: ${({ theme }) => theme.fontSizes.xs};

  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  letter-spacing: 1.5px;
`;

export function Newsletter() {
  return (
    <ContainerNewsletter>
      <div className="limit-container">
        <NewsLetterText>
          <h3 className="titulo">Receba Nossos Lançamentos</h3>
          <p className="desc">
            Ao cadastrar seu e-mail, você concorda em receber comunicações nos
            termos da nossa{" "}
            <span className="span-politica">Politica de Privacidade</span>
          </p>
        </NewsLetterText>
        <InputContainer>
          <InputCadastro placeholder="Digite seu e-mail aqui"></InputCadastro>
          <SearchBtn>Cadastrar</SearchBtn>
        </InputContainer>
      </div>
    </ContainerNewsletter>
  );
}
