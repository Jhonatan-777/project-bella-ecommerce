"use client";

import bannerLimitedA from "@/app/assets/images/banners/banner-limited-a.png";
import bannerPromotions from "@/app/assets/images/banner-promotions.png";
import bannerLimitedEdition from "@/app/assets/images/banner-limited-edition.png";
import bannerWinterFashion from "@/app/assets/images/banner-winter-fashion.png";

import styled from "styled-components";
import { flex, limitWidth } from "@/app/styles/mixins";
import ContainerBannerLimited from "./banner-divider-section/banner-limited-container/BannerLimited";

const ContainerMainProducts = styled.section`
  width: 100%;

  ${flex("center", "center")};
  padding: 20px 0;

  .container {
    width: 90%;
    ${limitWidth}
  }
`;

export default function SectionMainProducts() {
  return (
    <ContainerMainProducts>
      <div className="container">
        <ContainerBannerLimited
          href="#"
          title="18% off em camisas e camisetas"
          imageAlt="18% off em camisas e camisetas"
          imageSrc={bannerLimitedA}
          position="top"
        />
      </div>
    </ContainerMainProducts>
  );
}
