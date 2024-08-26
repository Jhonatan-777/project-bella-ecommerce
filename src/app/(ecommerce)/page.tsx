"use client";

import BannerMain from "@/components/banners/banner-main/BannerMain";
import styled from "styled-components";

const ContainerSections = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
`;

export default function Home() {
  return (
    <ContainerSections>
      <BannerMain />
    </ContainerSections>
  );
}
