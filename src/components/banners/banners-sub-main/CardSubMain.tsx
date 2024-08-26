"use client";

import Image, { StaticImageData } from "next/image";

import styled from "styled-components";
import Link from "next/link";

interface CardSubMain {
  href: string;
  title: string;
  imageAlt: string;
  imageSrc: StaticImageData;
}

const Card = styled.div`
  display: flex;

  .bannerCardLink {
    position: relative;
    width: 100%;
    height: auto;

    display: flex;
    justify-content: center;

    overflow: hidden;
    border-radius: 10px;

    cursor: pointer;

    .bannerCardButton {
      position: absolute;
      left: 5%;
      bottom: 5%;
      font-size: ${({ theme }) => theme.fontSizes.xs};
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.white};
      font-weight: 600;
      letter-spacing: 1.5px;
    }
  }
`;

const BannerCardTitle = styled.h2`
  position: absolute;
  left: 5%;
  top: 5%;
  width: 5ch;
  line-height: 1.1;
  z-index: 10;
  font-family: var(--font-title);
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;

export default function CardSubMain({
  href,
  title,
  imageAlt,
  imageSrc,
}: CardSubMain) {
  return (
    <Card>
      <Link href={href} className="bannerCardLink">
        <Image
          alt={imageAlt}
          src={imageSrc}
          priority={true}
          placeholder="blur"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            objectPosition: "top",
          }}
        />
        <span className="bannerCardButton">confira agora</span>
        <BannerCardTitle>{title}</BannerCardTitle>
      </Link>
    </Card>
  );
}
