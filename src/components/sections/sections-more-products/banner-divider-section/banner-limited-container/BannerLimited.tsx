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
  cta: string;
  desc?: string;
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
  }
`;

const DescBannerLimited = styled.div`
  position: absolute;
  left: 10%;
  top: 10%;
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .bannerLimitedTitle {
    line-height: 1.1;
    z-index: 10;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: 600;
    width: 19ch;
    margin-bottom: 20px;
  }

  .bannerLimitedDesc {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 400;
    letter-spacing: 1.1px;
    flex: 1;
  }

  .bannerLimitedButton {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 600;
    letter-spacing: 1.5px;
    justify-self: end;
  }
`;

export default function ContainerBannerLimited({
  href,
  title,
  imageAlt,
  imageSrc,
  position,
  cta,
  desc,
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
            display: "block",
          }}
        />
        <DescBannerLimited>
          <h3 className="bannerLimitedTitle">{title}</h3>
          <p className="bannerLimitedDesc">{desc}</p>
          <span className="bannerLimitedButton">{cta}</span>
        </DescBannerLimited>
      </Link>
    </Container>
  );
}
