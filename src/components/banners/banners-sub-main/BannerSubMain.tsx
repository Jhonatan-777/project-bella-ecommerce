"use client";

import bannerNewCollection from "@/app/assets/images/banner-new-collection-a.png";
import bannerPromotions from "@/app/assets/images/banner-promotions.png";
import bannerLimitedEdition from "@/app/assets/images/banner-limited-edition.png";
import bannerWinterFashion from "@/app/assets/images/banner-winter-fashion.png";

import styled from "styled-components";
import { flex, limitWidth } from "@/app/styles/mixins";
import BannerMain from "./CardSubMain";

const BannersSubMainSlide = styled.section`
  width: 100%;

  ${flex("center", "center")};
  padding: 20px 0;

  .cardContainer {
    width: 90%;
    ${limitWidth}
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

    @media screen and (max-width: 1327px) {
      grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
      grid-auto-rows: minmax(100px, 260px);
    }
    @media screen and (max-width: 980px) {
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      grid-auto-rows: minmax(100px, 200px);
    }
  }
`;

export default function BannersSubMain() {
  return (
    <BannersSubMainSlide>
      <div className="cardContainer">
        <BannerMain
          href="#"
          title="Nova Coleção"
          imageAlt="Nova Coleção"
          imageSrc={bannerNewCollection}
          position="top"
        />
        <BannerMain
          href="#"
          title="Promoções"
          imageAlt="Promoções"
          imageSrc={bannerPromotions}
          position="center"
        />
        <BannerMain
          href="#"
          title="Edição Limitada"
          imageAlt="Edição Limitada"
          imageSrc={bannerLimitedEdition}
          position="bottom"
        />
        <BannerMain
          href="#"
          title="Inverno Fashion"
          imageAlt="Inverno Fashion"
          imageSrc={bannerWinterFashion}
          position="top"
        />
      </div>
    </BannersSubMainSlide>
  );
}
