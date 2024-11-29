"use client";

import styled from "styled-components";

import Logo from "@/components/logo-component/logo";
import Advantages from "../header-additional/advantages/advantages-a";
import Offer from "../header-additional/offer/offer-a";
import PrimaryInputSearch from "./input/primary-input";
import ObserveRegister from "./header-observe/headerObserve";
import SubMenu from "../header-menu/header-sub-menu";
import { flex } from "@/app/styles/mixins";
import { useEffect, useState } from "react";

const TagHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const ContainerHeader = styled.div`
  width: 100%;
  ${flex("center", "center")};
  background-color: ${({ theme }) => theme.colors.white};
  transition: all 0.3s ease;

  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 900;
    box-shadow: 0 2px 4px 2px rgba(61, 61, 61, 0.6);
  }

  .container {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;

    padding: 15px 0;
  }
`;

const ContainerSubMenu = styled.div`
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.neutralColorStrong};
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutralColorStrong};

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px 0;

  @media (max-width: 400px) {
    display: none;
  }
`;

export function Header() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <TagHeader>
      <Offer />
      <Advantages />
      <ContainerHeader>
        <div className="container">
          <Logo />
          <PrimaryInputSearch />
          <ObserveRegister />
        </div>
      </ContainerHeader>
      {isFixed && (
        <ContainerHeader className={isFixed ? "fixed" : ""}>
          <div className="container">
            <Logo />
            <PrimaryInputSearch />
            <ObserveRegister />
          </div>
        </ContainerHeader>
      )}

      <ContainerSubMenu>
        <SubMenu />
      </ContainerSubMenu>
    </TagHeader>
  );
}
