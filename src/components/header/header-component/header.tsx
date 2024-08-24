"use client";

import styled from "styled-components";

import Logo from "@/components/logo-component/logo";
import Advantages from "../header-additional/advantages/advantages-a";
import Offer from "../header-additional/offer/offer-a";
import PrimaryInputSearch from "./input/primary-input";
import ObserveRegister from "./header-observe/headerObserve";
import SubMenu from "../header-menu/header-sub-menu";

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

  padding: 15px 0;
`;

const ContainerSubMenu = styled.div`
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.neutralColorStrong};
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutralColorStrong};

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px 0;
`;

export function Header(props: HeaderProps) {
  return (
    <TagHeader>
      <Offer />
      <Advantages />
      <ContainerHeader>
        <Logo />
        <PrimaryInputSearch />
        <ObserveRegister />
      </ContainerHeader>

      <ContainerSubMenu>
        <SubMenu />
      </ContainerSubMenu>
    </TagHeader>
  );
}
