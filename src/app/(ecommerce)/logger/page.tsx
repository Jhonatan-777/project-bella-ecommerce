"use client";

import { flex, limitWidth } from "@/app/styles/mixins";
import { products } from "@/data/constants/products";
import Image from "next/image";
import styled from "styled-components";

const ContainerLoggerPage = styled.section`
  width: 100%;

  ${flex("center", "center")};
  flex-direction: column;
  padding: 20px 0;

  .container {
    width: 90%;
    ${limitWidth}
    ${flex("space-between", "start")};
    gap: 20px;
    flex-wrap: wrap;

    @media (max-width: 990px) {
      ${flex("center", "start")};
    }
  }
`;

const ContainLogin = styled.form`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.neutralColorLight};
  border-radius: 4px;

  ${flex("flex-start", "start")};
  flex-direction: column;
  padding: 20px;

  .titleForm {
    font-size: ${({ theme }) => theme.fontSizes.m};
    color: ${({ theme }) => theme.colors.black};
    font-weight: 400;
  }

  .campo {
    display: flex;
    flex-direction: column;

    label {
      font-size: ${({ theme }) => theme.fontSizes.s};
      color: ${({ theme }) => theme.colors.black};
      font-weight: 400;
      display: block;
    }

    input {
      width: 100%;
      font-family: inherit;
      font-size: ${({ theme }) => theme.fontSizes.xs};
      color: ${({ theme }) => theme.colors.neutralColorLight};
      font-weight: 400;
      padding: 10px;
      border: none;
      border-radius: 4px;
    }
  }
`;

export default function LoggerPage() {
  return (
    <ContainerLoggerPage>
      <div className="container">
        <ContainLogin>
          <h2 className="titleForm">Entrar na Conta</h2>
          <div className="campo">
            <label htmlFor="email">e-mail ou CPF</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="e-mail ou CPF"
            />
          </div>
          <div className="campo">
            <label htmlFor="password">senha</label>
            <input type="password" id="password" name="password" />
          </div>
          <button className="btn">Entrar</button>
          <p className="loginSocial">Acessar com rede social</p>
          <button className="btn">Goggle</button>
          <button className="btn">Facebook</button>
        </ContainLogin>
        {/* <ContainNewConta>new conta</ContainNewConta> */}
      </div>
    </ContainerLoggerPage>
  );
}
