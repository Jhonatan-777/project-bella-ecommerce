"use client";

import styled from "styled-components";

import bandVisa from "@/app/assets/images/bandeiras/visa.png";
import bandMaster from "@/app/assets/images/bandeiras/master.png";
import bandAmex from "@/app/assets/images/bandeiras/amex.png";
import bandElo from "@/app/assets/images/bandeiras/elo.png";
import bandHyper from "@/app/assets/images/bandeiras/hyper.png";
import bandBoleto from "@/app/assets/images/bandeiras/boleto.png";
import bandPix from "@/app/assets/images/bandeiras/pix.png";
import Image from "next/image";
import { LinksSocial } from "@/components/links-social/LinksSocial";

const ContainFooterInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  flex-wrap: wrap;
  padding: 15px 0;

  .list-pagamento {
    .list-title {
      margin-bottom: 10px;
      font-size: ${({ theme }) => theme.fontSizes.s};
      color: ${({ theme }) => theme.colors.white};
      font-weight: 500;
      letter-spacing: 1.1px;
    }

    .list {
      list-style: none;
      display: flex;
      gap: 10px;
    }
  }
`;

export function FooterInfo() {
  return (
    <ContainFooterInfo>
      <div className="list-pagamento">
        <h3 className="list-title">formas de pagamento</h3>
        <ul className="list">
          <li>
            <Image
              alt="bandeira Visa"
              src={bandVisa}
              priority={false}
              sizes="100vw"
              style={{
                width: "35px",
                height: "20px",
                display: "block",
              }}
            />
          </li>
          <li>
            <Image
              alt="bandeira MasterCard"
              src={bandMaster}
              priority={false}
              sizes="100vw"
              style={{
                width: "35px",
                height: "20px",
                display: "block",
              }}
            />
          </li>
          <li>
            <Image
              alt="bandeira Amex"
              src={bandAmex}
              priority={false}
              sizes="100vw"
              style={{
                width: "35px",
                height: "20px",
                display: "block",
              }}
            />
          </li>
          <li>
            <Image
              alt="bandeira Elo"
              src={bandElo}
              priority={false}
              sizes="100vw"
              style={{
                width: "35px",
                height: "20px",
                display: "block",
              }}
            />
          </li>
          <li>
            <Image
              alt="bandeira Hypercard"
              src={bandHyper}
              priority={false}
              sizes="100vw"
              style={{
                width: "35px",
                height: "20px",
                display: "block",
              }}
            />
          </li>
          <li>
            <Image
              alt="bandeira Boleto"
              src={bandBoleto}
              priority={false}
              sizes="100vw"
              style={{
                width: "35px",
                height: "20px",
                display: "block",
              }}
            />
          </li>
          <li>
            <Image
              alt="bandeira Pix"
              src={bandPix}
              priority={false}
              sizes="100vw"
              style={{
                width: "35px",
                height: "20px",
                display: "block",
              }}
            />
          </li>
        </ul>
      </div>
      <LinksSocial />
    </ContainFooterInfo>
  );
}
