"use client";

import Image, { StaticImageData } from "next/image";

import styled from "styled-components";
import Link from "next/link";
import { flex } from "@/app/styles/mixins";

interface ContainerBannerLimited {
  href: string;
  title: string;
  imageAlt: string;
  imageSrc: StaticImageData | string;
  position?: string;
}

const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};

  ${flex("center", "center")};
  flex-direction: column;
  padding: 50px 0;

  .bannerLimitedLink {
    position: relative;
    width: 100%;
    height: auto;

    object-fit: contain;

    overflow: hidden;
    border-radius: 10px;

    cursor: pointer;

    .bannerLimitedButton {
      position: absolute;
      left: 5%;
      bottom: 10%;
      font-size: ${({ theme }) => theme.fontSizes.xs};
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.white};
      font-weight: 600;
      letter-spacing: 1.5px;
    }
  }
`;

const BannerLimitedTitle = styled.h2`
  position: absolute;
  left: 5%;
  top: 10%;
  width: 19ch;
  line-height: 1.1;
  z-index: 10;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 400;
`;

export default function ContainerBannerLimited({
  href,
  title,
  imageAlt,
  imageSrc,
  position,
}: ContainerBannerLimited) {
  return (
    <Container>
      <Link href={href} className="bannerLimitedLink">
        <Image
          alt={imageAlt}
          src={imageSrc}
          priority={true}
          placeholder="blur"
          sizes="100vw"
          style={{
            width: "100%",
            height: "230px",
            objectFit: "cover",
            objectPosition: position,
          }}
        />
        <span className="bannerLimitedButton">confira agora</span>
        <BannerLimitedTitle>{title}</BannerLimitedTitle>
      </Link>
    </Container>
  );
}
