"use client";

import Image from "next/image";

import styled from "styled-components";
import { flex, limitWidth } from "@/app/styles/mixins";

import CartProductNew from "../../product-cart/cart-news/CartNews";
import { products } from "@/app/assets/images/item-products/itemProducts";

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
  }

  .containerItems {
    width: 90%;
    ${limitWidth}
    display: flex;
    justify-content: space-between;
    gap: 5px;

    .bannerNewsProduct {
      width: 285px;
      border-radius: 5px;
      overflow: hidden;
    }
  }
`;

export default function SectionNews() {
  const news = products[0]?.news || [];

  // Filtra os banners
  const bannerNews = news.filter((item) => item.banner);

  // Acessa o primeiro banner, se existir
  const banner = bannerNews.length > 0 ? bannerNews[0].banner : null;

  return (
    <ContainerSectionNews>
      <h2 className="titleSection">Novos Produtos</h2>
      <div className="containerItems">
        <div className="bannerNewsProduct">
          {banner && (
            <Image
              className="bannerImage"
              alt={banner.imageAlt}
              src={banner.imageSrc}
              priority={false}
              placeholder="blur"
              width={banner.width}
              height={banner.height}
            />
          )}
        </div>
        {news.map((item, index) => {
          if (item.camisas) {
            return item.camisas.map((camisa, i) => (
              <CartProductNew
                key={`${index}-${i}`}
                href={camisa.href}
                title={camisa.title}
                imageAlt={camisa.imageAlt}
                imageSrc={camisa.imageSrc}
                width={camisa.width}
                height={camisa.height}
                desc={camisa.desc}
                price={camisa.price}
                discount={camisa.discount}
                rating={camisa.rating}
                type={camisa.type}
              />
            ));
          } else {
            return null; // Não renderiza nada se não for um item de camisa
          }
        })}
      </div>
    </ContainerSectionNews>
  );
}
