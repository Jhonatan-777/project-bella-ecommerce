"use client";

import iconSeguro from "@/app/assets/images/services-icons/seguro.png";
import iconFone from "@/app/assets/images/services-icons/fone.png";
import iconCertificado from "@/app/assets/images/services-icons/certificado.png";
import iconMundo from "@/app/assets/images/services-icons/mundo.png";
import iconEntrega from "@/app/assets/images/services-icons/entrega.png";
import iconPresente from "@/app/assets/images/services-icons/presente.png";

import styled from "styled-components";
import { flex, limitWidth } from "@/app/styles/mixins";
import Image from "next/image";

const ContainerServiceList = styled.ul`
  width: 1180px;

  ${flex("center", "center")};
  padding: 20px 0;
  gap: 20px;

  .itemService {
    width: 180px;
    height: 180px;
    ${flex("center", "center")};
    position: relative;

    .itemServiceImage {
      position: absolute;
      transition: all 0.5s;
    }

    .itemServiceText {
      position: absolute;
      font-size: ${({ theme }) => theme.fontSizes.m};
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.neutralColor};
      font-weight: 600;
      letter-spacing: 1.5px;
      opacity: 0;
      transition: all 0.5s;
      text-align: center;
    }

    &:hover {
      .itemServiceImage {
        opacity: 0;
      }
      .itemServiceText {
        opacity: 1;
      }
    }
  }
`;

export default function ServiceList() {
  return (
    <ContainerServiceList>
      <li className="itemService">
        <Image
          className="itemServiceImage"
          alt="icon Site 100% Seguro"
          src={iconSeguro}
          priority={true}
          placeholder="blur"
          style={{
            width: "100%",
            height: "100%",
            maxWidth: "100px",
            maxHeight: "100px",
            objectFit: "fill",
            display: "block",
          }}
        />
        <span className="itemServiceText">Site 100% Seguro</span>
      </li>
      <li className="itemService">
        <Image
          className="itemServiceImage"
          alt="icon Site 100% Seguro"
          src={iconFone}
          priority={true}
          placeholder="blur"
          style={{
            width: "100%",
            height: "100%",
            maxWidth: "90px",
            maxHeight: "90px",
            objectFit: "fill",
            display: "block",
          }}
        />
        <span className="itemServiceText">Suporte Ágil</span>
      </li>
      <li className="itemService">
        <Image
          className="itemServiceImage"
          alt="icon Site 100% Seguro"
          src={iconCertificado}
          priority={true}
          placeholder="blur"
          style={{
            width: "100%",
            height: "100%",
            maxWidth: "100px",
            maxHeight: "100px",
            objectFit: "fill",
            display: "block",
          }}
        />
        <span className="itemServiceText">Fashion License</span>
      </li>
      <li className="itemService">
        <Image
          className="itemServiceImage"
          alt="icon Site 100% Seguro"
          src={iconMundo}
          priority={true}
          placeholder="blur"
          style={{
            width: "100%",
            height: "100%",
            maxWidth: "90px",
            maxHeight: "90px",
            objectFit: "fill",
            display: "block",
          }}
        />
        <span className="itemServiceText">Sustentabilidade</span>
      </li>
      <li className="itemService">
        <Image
          className="itemServiceImage"
          alt="icon Site 100% Seguro"
          src={iconEntrega}
          priority={true}
          placeholder="blur"
          style={{
            width: "100%",
            height: "100%",
            maxWidth: "120px",
            maxHeight: "120px",
            objectFit: "fill",
            display: "block",
          }}
        />
        <span className="itemServiceText">Entrega Rápida</span>
      </li>
      <li className="itemService">
        <Image
          className="itemServiceImage"
          alt="icon Site 100% Seguro"
          src={iconPresente}
          priority={true}
          placeholder="blur"
          style={{
            width: "100%",
            height: "100%",
            maxWidth: "90px",
            maxHeight: "90px",
            objectFit: "fill",
            display: "block",
          }}
        />
        <span className="itemServiceText">O Melhor Presente</span>
      </li>
    </ContainerServiceList>
  );
}
