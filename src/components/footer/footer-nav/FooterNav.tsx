"use client";

import styled from "styled-components";

const ContainFooterNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 30px;
  flex-wrap: wrap;
  padding: 15px 0;

  .list-container {
    width: 150px;

    .list-title {
      margin-bottom: 20px;
      font-size: ${({ theme }) => theme.fontSizes.s};
      color: ${({ theme }) => theme.colors.white};
      text-transform: uppercase;
      font-weight: 500;
      letter-spacing: 1.1px;
    }

    .list {
      list-style: none;

      .list-link {
        margin-bottom: 10px;
        color: ${({ theme }) => theme.colors.neutralColorLight};
        font-size: ${({ theme }) => theme.fontSizes.s};
        font-weight: 400;

        a {
          display: inline-block;
          transition: all 0.2s;

          &:hover {
            color: ${({ theme }) => theme.colors.white};
            transform: translateX(-2px);
          }
        }
      }
    }
  }
`;

export function FooterNav() {
  return (
    <ContainFooterNav>
      <div className="list-container">
        <h3 className="list-title">A Bella</h3>
        <ul className="list">
          <li className="list-link">
            <a href="#">bem sentir-se bem</a>
          </li>
          <li className="list-link">
            <a href="#">sustentabilidade</a>
          </li>
          <li className="list-link">
            <a href="#">iniciativas</a>
          </li>
          <li className="list-link">
            <a href="#">trabalhe conosco</a>
          </li>
        </ul>
      </div>
      <div className="list-container">
        <h3 className="list-title">Atendimento</h3>
        <ul className="list">
          <li className="list-link">
            <a href="#">encontre a bella</a>
          </li>
          <li className="list-link">
            <a href="#">ajuda e contato</a>
          </li>
          <li className="list-link">
            <a href="#">ouvidoria</a>
          </li>
        </ul>
      </div>

      <div className="list-container">
        <h3 className="list-title">Suporte</h3>
        <ul className="list">
          <li className="list-link">
            <a href="#">aviso de privacidade</a>
          </li>
          <li className="list-link">
            <a href="#">políticas de cookies</a>
          </li>
          <li className="list-link">
            <a href="#">trocas e devoluções</a>
          </li>
          <li className="list-link">
            <a href="#">políticas de compra</a>
          </li>
          <li className="list-link">
            <a href="#">imprensa</a>
          </li>
          <li className="list-link">
            <a href="#">descrição</a>
          </li>
        </ul>
      </div>

      <div className="list-container">
        <h3 className="list-title">Perfis</h3>
        <ul className="list">
          <li className="list-link">
            <a href="#">consultores bella</a>
          </li>
          <li className="list-link">
            <a href="#">investidores</a>
          </li>
          <li className="list-link">
            <a href="#">fornecedores</a>
          </li>
        </ul>
      </div>
    </ContainFooterNav>
  );
}
