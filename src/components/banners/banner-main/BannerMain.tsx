"use client";

import Image from "next/image";
import banner from "@/app/assets/images/BannerMain.png";

import styled from "styled-components";
import { flex, limitWidth } from "@/app/styles/mixins";
import Link from "next/link";

const BannerMainSlide = styled.section`
  width: 100%;

  ${flex("center", "center")};
  padding: 20px 0;

  .bannerLink {
    position: relative;
    width: 90%;
    ${limitWidth}

    display: flex;
    flex-direction: column;

    overflow: hidden;
    border-radius: 10px 10px 0 0;

    cursor: pointer;

    .bannerButton {
      border-radius: 0px 0px 10px 10px;
      padding: 20px 0;
      background-color: ${({ theme }) => theme.colors.secondaryColor};
      font-size: ${({ theme }) => theme.fontSizes.m};
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.white};
      font-weight: 600;
      letter-spacing: 1.5px;

      text-align: center;
    }
  }
`;

const BannerTitle = styled.h1`
  position: absolute;
  left: 10%;
  bottom: 20%;
  width: 10ch;
  line-height: 1.1;
  z-index: 10;
  font-family: var(--font-title);
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.xxl};
`;

export default function BannerMain() {
  return (
    <BannerMainSlide>
      <Link href="#" className="bannerLink">
        <Image
          alt="banner"
          src={banner}
          priority={true}
          placeholder="blur"
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
        <span className="bannerButton">confira agora</span>
        <BannerTitle>20% OFF CALÇADOS</BannerTitle>
      </Link>
    </BannerMainSlide>
  );
}
