"use client";

import styled from "styled-components";
import { flex, limitWidth } from "@/app/styles/mixins";

import CardProduct from "@/components/product-cart/card-product/CardProduct";
import { products } from "@/data/constants/products";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ContainerMoreProducts {
  href: string;
  title: string;
  imageAlt: string;
  imageSrc: StaticImageData | string;
  position?: string;
  desc: string;
  titleBanner: string;
}

const ContainerProducts = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};

  ${flex("center", "center")};
  flex-direction: column;
  padding: 50px 0;

  .titleSection {
    font-family: var(--font-title);
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    font-weight: 500;
    margin-bottom: 50px;
    line-height: 1.1;
  }

  .containerItems {
    ${limitWidth}
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;

    .containerBannerMore {
      display: flex;
      position: relative;

      .bannerMoreProduct {
        width: 285px;
        border-radius: 5px;
        overflow: hidden;
      }
    }
  }
`;

const TextBannerMore = styled.div`
  position: absolute;
  left: 5%;
  bottom: 5%;

  color: ${({ theme }) => theme.colors.white};

  letter-spacing: 1.5px;

  .titleBanner {
    width: 10ch;
    line-height: 1.1;
    font-weight: 500;
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.fontSizes.xl};
    margin-bottom: 10px;
  }

  .descriptionBanner {
    width: 25ch;
    line-height: 1.1;
    font-weight: 300;
    font-size: ${({ theme }) => theme.fontSizes.m};
    margin-bottom: 30px;
  }

  .ctaBanner {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 600;
    letter-spacing: 1.5px;
  }
`;

export default function ContainerMoreProducts({
  href,
  title,
  imageAlt,
  imageSrc,
  desc,
  titleBanner,
}: ContainerMoreProducts) {
  return (
    <ContainerProducts>
      <h2 className="titleSection">{title}</h2>
      <div className="containerItems">
        <div className="containerBannerMore">
          <Link href={href} className="bannerMoreProduct">
            <Image
              alt={imageAlt}
              src={imageSrc}
              priority={true}
              placeholder="blur"
              width="285"
              height="410"
              style={{
                display: "block",
              }}
            />
          </Link>
          <TextBannerMore>
            <h3 className="titleBanner">{titleBanner}</h3>
            <p className="descriptionBanner">{desc}</p>
            <p className="ctaBanner">Confira Agora</p>
          </TextBannerMore>
        </div>
        {products
          .filter((item) => item.emphasis === "secondary")
          .slice(0, 7)
          .map((product) =>
            product ? <CardProduct key={product.id} product={product} /> : null
          )}
      </div>
    </ContainerProducts>
  );
}
