"use client";

import styled from "styled-components";

import iconFace from "@/app/assets/images/social/iconFace.png";
import iconInsta from "@/app/assets/images/social/iconInsta.png";
import iconTwiter from "@/app/assets/images/social/iconTwiter.png";
import iconYouTube from "@/app/assets/images/social/iconYouTube.png";
import iconSpotph from "@/app/assets/images/social/iconSpotph.png";
import iconBlog from "@/app/assets/images/social/iconBlog.png";

import Image from "next/image";

const ContainLinksSocial = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  .list {
    list-style: none;
    display: flex;
    gap: 10px;
  }
`;

export function LinksSocial() {
  return (
    <ContainLinksSocial>
      <ul className="list">
        <li>
          <a href="#">
            <Image
              alt="icon Facebook"
              src={iconFace}
              priority={false}
              sizes="100vw"
              style={{
                width: "25px",
                height: "25px",
                display: "block",
              }}
            />
          </a>
        </li>
        <li>
          <a href="#">
            <Image
              alt="icon Instagram"
              src={iconInsta}
              priority={false}
              sizes="100vw"
              style={{
                width: "25px",
                height: "25px",
                display: "block",
              }}
            />
          </a>
        </li>
        <li>
          <a href="#">
            <Image
              alt="icon Twitter"
              src={iconTwiter}
              priority={false}
              sizes="100vw"
              style={{
                width: "25px",
                height: "25px",
                display: "block",
              }}
            />
          </a>
        </li>
        <li>
          <a href="#">
            <Image
              alt="icon YouTube"
              src={iconYouTube}
              priority={false}
              sizes="100vw"
              style={{
                width: "25px",
                height: "25px",
                display: "block",
              }}
            />
          </a>
        </li>
        <li>
          <a href="#">
            <Image
              alt="icon Spotph"
              src={iconSpotph}
              priority={false}
              sizes="100vw"
              style={{
                width: "25px",
                height: "25px",
                display: "block",
              }}
            />
          </a>
        </li>
        <li>
          <a href="#">
            <Image
              alt="icon Blog"
              src={iconBlog}
              priority={false}
              sizes="100vw"
              style={{
                width: "42px",
                height: "25px",
                display: "block",
              }}
            />
          </a>
        </li>
      </ul>
    </ContainLinksSocial>
  );
}
