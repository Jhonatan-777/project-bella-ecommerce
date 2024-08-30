"use client";

import styled from "styled-components";
import { flex, limitWidth } from "@/app/styles/mixins";

import ItemDiversified from "./trackItem";
import { items } from "@/app/assets/images/item-track/itemTrack";

const ContainerDiversifiedTrack = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primaryColorLight};

  ${flex("center", "center")};
  padding: 10px 0;

  .containerItems {
    width: 90%;
    ${limitWidth}
    display: flex;
    justify-content: space-between;
    gap: 5px;
  }
`;

export default function DiversifiedTrack() {
  return (
    <ContainerDiversifiedTrack>
      <div className="containerItems">
        {items.map((item, index) => (
          <ItemDiversified
            key={index}
            href={item.href}
            title={item.title}
            imageAlt={item.imageAlt}
            imageSrc={item.imageSrc}
            width={item.width}
            height={item.height}
          />
        ))}
      </div>
    </ContainerDiversifiedTrack>
  );
}
