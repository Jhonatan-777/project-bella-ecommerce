"use client";

import { flex, limitWidth } from "@/app/styles/mixins";
import { Newsletter } from "@/components/newsletter/Newsletter";
import { useState } from "react";
import styled from "styled-components";

const ContainerLoginPage = styled.section`
  width: 100%;

  ${flex("center", "center")};
  flex-direction: column;

  .container {
    padding: 20px 0;
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
  flex: 1 1 45%;
  min-width: 300px;
  background-color: ${({ theme }) => theme.colors.primaryColorMoreLight};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.primaryColorLight};
  position: relative;

  ${flex("flex-start", "start")};
  flex-direction: column;
  padding: 20px;

  .titleForm {
    font-size: ${({ theme }) => theme.fontSizes.m};
    color: ${({ theme }) => theme.colors.black};
    font-weight: 400;
    margin-bottom: 20px;
  }

  .campo {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 15px;

    label {
      font-size: ${({ theme }) => theme.fontSizes.s};
      color: ${({ theme }) => theme.colors.black};
      font-weight: 400;
      display: block;
      margin-bottom: 5px;
    }

    input {
      width: 100%;
      font-family: inherit;
      font-size: ${({ theme }) => theme.fontSizes.s};
      color: ${({ theme }) => theme.colors.neutralColorStrong};
      font-weight: 400;
      padding: 10px;
      border: none;
      border-radius: 4px;
      background-color: ${({ theme }) => theme.colors.bgInput};

      &::placeholder {
        font-size: ${({ theme }) => theme.fontSizes.xs};
        color: ${({ theme }) => theme.colors.neutralColorLight};
      }
    }
  }

  .btn {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 4px;
    margin-bottom: 15px;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme }) => theme.colors.neutralColorStrong};
    font-weight: 600;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.primaryColorLight};
    transition: all 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.primaryColorStrong};
    }

    &:active {
      transform: scale(0.95);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    &.btn-google {
      border: 1px solid #db4a39;
      color: #db4a39;
      background-color: white;

      &:hover {
        background-color: #db4a39;
        color: white;
      }
    }

    &.btn-face {
      border: 1px solid #3b5998;
      color: #3b5998;
      background-color: white;
      margin-bottom: 0;

      &:hover {
        background-color: #3b5998;
        color: white;
      }
    }
  }

  .loginSocial {
    margin-bottom: 10px;
    font-size: ${({ theme }) => theme.fontSizes.s};
    color: ${({ theme }) => theme.colors.neutralColorStrong};
    font-weight: 400;
  }
  .politica {
    width: 100%;
    text-align: center;
    padding-top: 20px;
    font-size: ${({ theme }) => theme.fontSizes.s};
    color: ${({ theme }) => theme.colors.neutralColorStrong};
    font-weight: 400;

    span {
      color: ${({ theme }) => theme.colors.neutralColor};
    }
  }
`;

const Aviso = styled.div`
  position: absolute;
  width: 200px;
  background: #4e6394;
  padding: 20px;
  border-radius: 4px;
  color: white;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export default function LoginPage() {
  const [showAviso, setShowAviso] = useState(false);
  const [showAvisoSegForm, setShowAvisoSegForm] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowAviso(true);
    setTimeout(() => {
      setShowAviso(false);
    }, 3000);
  };

  const handleClickSegForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowAvisoSegForm(true);
    setTimeout(() => {
      setShowAvisoSegForm(false);
    }, 3000);
  };

  const calcularDataMinima = () => {
    const hoje = new Date();
    const ano = hoje.getFullYear() - 18; // Subtrai 18 anos da data atual
    const mes = String(hoje.getMonth() + 1).padStart(2, "0"); // Adiciona zero à esquerda, se necessário
    const dia = String(hoje.getDate()).padStart(2, "0");
    return `${ano}-${mes}-${dia}`; // Retorna no formato "YYYY-MM-DD"
  };

  return (
    <ContainerLoginPage>
      <div className="container">
        <ContainLogin id="form1">
          <h2 className="titleForm">Entrar na Conta</h2>
          <div className="campo">
            <label htmlFor="email-login">e-mail ou CPF</label>
            <input
              type="email"
              id="email-login"
              name="email"
              placeholder="e-mail ou CPF"
            />
          </div>
          <div className="campo">
            <label htmlFor="password-login">senha</label>
            <input
              type="password"
              id="password-login"
              name="password"
              placeholder="digite sua senha"
            />
          </div>
          <button className="btn" onClick={handleClick}>
            Entrar
          </button>
          <p className="loginSocial">Acessar com rede social</p>
          <button className="btn btn-google" onClick={handleClick}>
            Goggle
          </button>
          <button className="btn btn-face" onClick={handleClick}>
            Facebook
          </button>
          {showAviso && (
            <Aviso>
              <p>
                O sistema de login está em atualização. Tente novamente mais
                tarde.
              </p>
            </Aviso>
          )}
        </ContainLogin>
        <ContainLogin id="form2">
          <h2 className="titleForm">Entrar na Conta</h2>
          <div className="campo">
            <label htmlFor="nome-register">Nome</label>
            <input
              type="text"
              id="nome-register"
              name="nome"
              placeholder="Digite seu nome"
            />
          </div>
          <div className="campo">
            <label htmlFor="sobrenome-register">Sobrenome</label>
            <input
              type="text"
              id="sobrenome-register"
              name="sobrenome"
              placeholder="Digite seu sobrenome"
            />
          </div>
          <div className="campo">
            <label htmlFor="email-register">E-mail</label>
            <input
              type="email"
              id="email-register"
              name="email"
              placeholder="meuemail@email.com"
            />
          </div>
          <div className="campos">
            <div className="campo">
              <label htmlFor="sexo-register">Sexo</label>
              <select id="sexo-register" name="sexo" defaultValue="" required>
                <option value="" disabled>
                  Selecione
                </option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
              </select>
            </div>
            <div className="campo">
              <label htmlFor="nasc-register">Nascimento</label>
              <input
                type="date"
                id="nasc-register"
                name="nasc"
                required
                max={calcularDataMinima()}
              />
            </div>
          </div>
          <div className="campo">
            <label htmlFor="cpf-register">CPF</label>
            <input
              type="text"
              id="cpf-register"
              name="cpf"
              placeholder="XXX.XXX.XXX-XX"
            />
          </div>
          <div className="campo">
            <label htmlFor="password-register">Senha</label>
            <input
              type="password"
              id="password-register"
              name="password"
              placeholder="Digite sua senha"
            />
          </div>
          <div className="campo">
            <label htmlFor="repPassword-register">Repetir Senha</label>
            <input
              type="password"
              id="repPassword-register"
              name="repPassword"
              placeholder="Repetir sua senha"
            />
          </div>
          <button className="btn" onClick={handleClickSegForm}>
            Entrar
          </button>
          <p className="loginSocial">Nova conta com rede social</p>
          <button className="btn btn-google" onClick={handleClickSegForm}>
            Goggle
          </button>
          <button className="btn btn-face" onClick={handleClickSegForm}>
            Facebook
          </button>
          <p className="politica">
            Ao criar uma conta, você concorda com a nossa <br />
            <span>Politica de Privacidade</span>
          </p>
          {showAvisoSegForm && (
            <Aviso>
              <p>
                O sistema de login está em atualização. Tente novamente mais
                tarde.
              </p>
            </Aviso>
          )}
        </ContainLogin>
      </div>
      <Newsletter />
    </ContainerLoginPage>
  );
}
