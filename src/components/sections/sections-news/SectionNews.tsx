"use client";

import Image from "next/image";
import BannerCard from "@/app/assets/images/banners/card-banners/banner-camisa-news.png";

import styled from "styled-components";
import { flex, limitWidth } from "@/app/styles/mixins";

import CardProductNew from "../../product-cart/card-news/CardNews";
import { products } from "@/data/constants/products";
import Link from "next/link";

const ContainerSectionNews = styled.section`
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
    margin-bottom: 30px;
    width: 90%;
    text-align: center;
    line-height: 1.1;
  }

  .containerItems {
    width: 90%;
    ${limitWidth}
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;

    .bannerNewsProduct {
      width: 285px;
      border-radius: 5px;
      overflow: hidden;
    }
  }
`;

export default function SectionNews() {
  return (
    <ContainerSectionNews>
      <h2 className="titleSection">Novos Produtos</h2>
      <div className="containerItems">
        <Link href="#" className="bannerNewsProduct">
          <Image
            className="bannerImage"
            alt="Banner da Coleção IsCool"
            src={BannerCard}
            priority={true}
            placeholder="blur"
            width="285"
            height="495"
            style={{
              display: "block",
            }}
          />
        </Link>
        {products
          .filter((item) => item.emphasis === "principal") // Filtrar por emphasis "principal"
          .slice(0, 3) // Limitar a 3 itens
          .map((product) =>
            product ? (
              <CardProductNew key={product.id} product={product} />
            ) : null
          )}
      </div>
    </ContainerSectionNews>
  );
}
