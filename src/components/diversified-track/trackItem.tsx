"use client";

import Image, { StaticImageData } from "next/image";

import styled from "styled-components";
import Link from "next/link";

interface ItemDiversified {
  href: string;
  title: string;
  imageAlt: string;
  imageSrc: StaticImageData | string;
  width: number;
  height: number;
}

const ItemContent = styled.div`
  display: flex;
  width: 80px;

  .itemLink {
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;

    transition: all 0.2s;

    cursor: pointer;

    img {
      transition: all 0.2s;
    }

    &:hover img {
      transform: scale(0.9);
    }

    &:hover p {
      transform: translateY(-2px);
      color: ${({ theme }) => theme.colors.primaryColorMoreStrong};
    }
  }
`;

const ItemTitle = styled.p`
  text-align: center;
  max-width: 9ch;
  line-height: 1.1;
  letter-spacing: 1.2px;
  font-family: var(--font-title);
  color: ${({ theme }) => theme.colors.primaryColorStrong};
  font-size: ${({ theme }) => theme.fontSizes.xs};

  transition: all 0.2s;
`;

export default function ItemDiversified({
  href,
  title,
  imageAlt,
  imageSrc,
  width,
  height,
}: ItemDiversified) {
  return (
    <ItemContent>
      <Link href={href} className="itemLink">
        <Image
          alt={imageAlt}
          src={imageSrc}
          priority={true}
          width={width}
          height={height}
        />
        <ItemTitle>{title}</ItemTitle>
      </Link>
    </ItemContent>
  );
}
