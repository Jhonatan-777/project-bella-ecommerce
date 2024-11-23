"use client";

import styled from "styled-components";

import Logo from "@/components/logo-component/logo";
import { FooterNav } from "./footer-nav/FooterNav";
import { limitWidth } from "@/app/styles/mixins";
import { FooterInfo } from "./footer-info/FooterInfo";

const TagFooter = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primaryColorMoreStrong};

  .container-copy {
    background-color: ${({ theme }) => theme.colors.neutralColorStrong};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;

    .copy {
      font-size: ${({ theme }) => theme.fontSizes.xs};
      color: ${({ theme }) => theme.colors.white};
      font-weight: 500;
      letter-spacing: 1.1px;
    }
  }
`;

const ContainerFooter = styled.div`
  width: 90%;
  ${limitWidth}
  display: flex;
  gap: 40px;
  flex-direction: column;
  padding: 30px 0;
`;

export function Footer() {
  return (
    <TagFooter>
      <ContainerFooter>
        <Logo color="#FFFFFF" />
        <FooterNav />
        <FooterInfo />
      </ContainerFooter>
      <div className="container-copy">
        <p className="copy">© 2024 Bella. Todos os direitos reservados.</p>
      </div>
    </TagFooter>
  );
}
