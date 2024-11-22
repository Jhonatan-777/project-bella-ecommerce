import bannerBlog from "@/app/assets/images/blog.png";
import bannerDist from "@/app/assets/images/dist.png";

import styled from "styled-components";
import { flex, limitWidth } from "@/app/styles/mixins";
import Link from "next/link";
import Image from "next/image";

const ContainerBD = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;

  &::before {
    z-index: 0;
    content: "";
    position: absolute;
    left: 0;
    bottom: -20px;
    width: 75%;
    height: 200px;
    background-color: ${({ theme }) => theme.colors.primaryColorMoreLight};
  }

  &::after {
    z-index: 0;
    content: "";
    position: absolute;
    right: 0;
    top: -20px;
    width: 75%;
    height: 200px;
    background-color: ${({ theme }) => theme.colors.primaryColorLight};
  }

  ${flex("center", "center")};
  flex-direction: column;
  padding: 50px 0;

  .container {
    z-index: 1;
    width: 90%;
    ${limitWidth}
    ${flex("center", "center")};
    flex-wrap: wrap;
    gap: 20px;

    .containerBD {
      width: 590px;
      border-radius: 10px;
      overflow: hidden;

      .buttonBD {
        background-color: ${({ theme }) => theme.colors.primaryColorStrong};
        font-size: ${({ theme }) => theme.fontSizes.l};
        font-style: italic;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.white};
        font-weight: 400;
        letter-spacing: 1.5px;
        width: 100%;
        display: flex;
        padding: 20px;
      }
    }
  }
`;

export default function ContainerBlogDist() {
  return (
    <ContainerBD>
      <div className="container">
        <Link href="#" className="containerBD">
          <Image
            alt="Blog Bella"
            src={bannerBlog}
            priority={true}
            placeholder="blur"
            style={{
              width: "100%",
              height: "100%",
              maxWidth: "590px",
              maxHeight: "240px",
              objectFit: "fill",
              display: "block",
            }}
          />
          <span className="buttonBD">Blog Bella</span>
        </Link>
        <Link href="#" className="containerBD">
          <Image
            alt="Seja uma Distribuidora"
            src={bannerDist}
            priority={true}
            placeholder="blur"
            style={{
              width: "100%",
              height: "100%",
              maxWidth: "590px",
              maxHeight: "240px",
              objectFit: "fill",
              display: "block",
            }}
          />
          <span className="buttonBD">Seja uma Distribuidora</span>
        </Link>
      </div>
    </ContainerBD>
  );
}
