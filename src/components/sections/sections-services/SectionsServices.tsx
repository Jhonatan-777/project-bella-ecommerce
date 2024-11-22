"use client";

import styled from "styled-components";
import { flex, limitWidth } from "@/app/styles/mixins";
import ContainerBlogDist from "./container-blog-dist/ContainerBlogDist";
import ContainerBannerLimited from "../sections-more-products/banner-divider-section/banner-limited-container/BannerLimited";
import bannerLimitedW from "@/app/assets/images/banners/banner-limited-w.png";
import ServiceList from "./services-list/ServiceList";

const ContainerServices = styled.section`
  width: 100%;

  ${flex("center", "center")};
  flex-direction: column;
  padding: 20px 0;
  margin-bottom: 50px;

  .container {
    width: 90%;
    ${limitWidth}

    &.listService {
      overflow-x: auto;
      overflow-y: hidden;
      white-space: nowrap;
      border: 1px solid #ccc;
      border-radius: 10px;
    }
  }
`;

export default function SectionServices() {
  return (
    <ContainerServices>
      <ContainerBlogDist />
      <div className="container">
        <ContainerBannerLimited
          href="#"
          title="Chama no whats!!!"
          imageAlt="18% off em camisas e camisetas"
          imageSrc={bannerLimitedW}
          position="-100px"
          cta="contate-nos agora"
          desc="para duvidas e suporte rápido contate-nos no WhatsApp"
        />
      </div>
      <div className="container listService">
        <ServiceList />
      </div>
    </ContainerServices>
  );
}
