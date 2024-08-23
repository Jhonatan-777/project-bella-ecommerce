"use client";

import styled from "styled-components";

import Logo from "@/components/logo-component/logo";
import Advantages from "../header-additional/advantages/advantages-a";
import Offer from "../header-additional/offer/offer-a";
import PrimaryInputSearch from "./input/primary-input";

interface HeaderProps {}

const TagHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const ContainerHeader = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px;
`;

export function Header(props: HeaderProps) {
  return (
    <TagHeader>
      <Offer />
      <Advantages />
      <ContainerHeader>
        <Logo />
        <PrimaryInputSearch />
      </ContainerHeader>
    </TagHeader>
  );
}
