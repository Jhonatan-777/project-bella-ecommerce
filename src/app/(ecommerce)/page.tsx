"use client";

import BannerMain from "@/components/banners/banner-main/BannerMain";
import BannersSubMain from "@/components/banners/banners-sub-main/BannerSubMain";
import DiversifiedTrack from "@/components/diversified-track/range";
import SectionNews from "@/components/sections/sections-news/SectionNews";
import styled from "styled-components";

const ContainerSections = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
`;

export default function Home() {
  return (
    <ContainerSections>
      <BannerMain />
      <BannersSubMain />
      <DiversifiedTrack />
      <SectionNews />
    </ContainerSections>
  );
}
