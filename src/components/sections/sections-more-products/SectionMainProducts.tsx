"use client";

import bannerLimitedA from "@/app/assets/images/banners/banner-limited-a.png";
import bannerLimitedB from "@/app/assets/images/banners/banner-limited-b.png";
import bannerCardA from "@/app/assets/images/banners/banner-card.png";

import styled from "styled-components";
import { flex, limitWidth } from "@/app/styles/mixins";
import ContainerBannerLimited from "./banner-divider-section/banner-limited-container/BannerLimited";
import ContainerMoreProducts from "./banner-divider-section/container-more-product/ContainerMoreProducts";

const ContainerMainProducts = styled.section`
  width: 100%;

  ${flex("center", "center")};
  flex-direction: column;
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
          position="left"
          cta="confira agora"
        />
      </div>
      <div className="container">
        <ContainerMoreProducts
          href="#"
          title="Ofertas imperdíveis em camisas e camisetas"
          imageAlt="18% off em camisas e camisetas"
          imageSrc={bannerCardA}
          desc="must-have da estação, que acabaram de chegar"
          titleBanner="Fashion Urbana"
        />
      </div>
      <div className="container">
        <ContainerBannerLimited
          href="#"
          title="presenteie com nossos lançamentos"
          imageAlt="presenteie com nossos lançamentos"
          imageSrc={bannerLimitedB}
          position="left"
          cta="confira agora"
        />
      </div>
      <div className="container">
        <ContainerMoreProducts
          href="#"
          title="O presente perfeito pra quem você ama"
          imageAlt="18% off em camisas e camisetas"
          imageSrc={bannerCardA}
          desc="must-have da estação, que acabaram de chegar"
          titleBanner="Fashion Urbana"
        />
      </div>
    </ContainerMainProducts>
  );
}
