"use client";

import Image, { StaticImageData } from "next/image";

import styled from "styled-components";
import Link from "next/link";
import { FavoriteIcon } from "@/components/ui/icons/favorite-icon";

interface CartProductNew {
  href: string;
  title: string;
  desc: string;
  price: string;
  discount: number;
  rating: number;
  type: string;
  imageAlt: string;
  imageSrc: StaticImageData | string;
  width: number;
  height: number;
}

const CartProduct = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.neutralColorLight};
  border-radius: 5px;
  overflow: hidden;

  .productLink {
    position: relative;
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;

    transition: all 0.2s;

    cursor: pointer;

    .buttonFav {
      position: absolute;
      top: 20px;
      left: 20px;
      border: none;
      background-color: transparent;
    }
    .productDetailDiscount {
      position: absolute;
      top: 20px;
      right: 20px;
    }
  }
`;

const ProductTextContent = styled.div`
  padding: 10px;

  .productPresentation {
    h3 {
      margin-bottom: 5px;
      line-height: 1.1;
      letter-spacing: 1.2px;
      font-family: var(--font-title);
      color: ${({ theme }) => theme.colors.black};
      font-size: ${({ theme }) => theme.fontSizes.s};
    }
    p {
      margin-bottom: 5px;
      line-height: 1.1;
      letter-spacing: 1.2px;
      color: ${({ theme }) => theme.colors.neutralColor};
      font-size: ${({ theme }) => theme.fontSizes.xs};
    }

    .productRating {
      display: flex;
      margin-bottom: 5px;

      p {
        line-height: 1.1;
        letter-spacing: 1.2px;
        color: ${({ theme }) => theme.colors.black};
        font-size: ${({ theme }) => theme.fontSizes.s};
      }
    }
  }

  .productAttention {
    display: flex;
    justify-content: space-between;

    .productContainPrices {
      .productDiscount {
        margin-bottom: 5px;
        text-decoration: line-through;
        color: ${({ theme }) => theme.colors.neutralColor};
        font-size: ${({ theme }) => theme.fontSizes.m};
      }
      .productPrice {
        line-height: 1.1;
        font-family: var(--font-title);
        color: ${({ theme }) => theme.colors.black};
        font-size: ${({ theme }) => theme.fontSizes.xl};
        font-weight: 500;
      }
    }

    .buttonBuy {
      padding: 20px 10px;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.white};
      font-size: ${({ theme }) => theme.fontSizes.xs};
      font-weight: 700;

      border: none;
      border-radius: 10px;

      background-color: ${({ theme }) => theme.colors.secondaryColor};
    }
  }

  transition: all 0.2s;
`;

export default function CartProductNew({
  href,
  title,
  imageAlt,
  imageSrc,
  width,
  height,
  desc,
  price,
  discount,
  rating,
  type,
}: CartProductNew) {
  return (
    <CartProduct>
      <Link href={href} className="productLink">
        <button className="buttonFav">
          <FavoriteIcon color="#dfa2a2" />
        </button>
        <div className="productDetailDiscount">
          <p>{`${discount * 10}%`}</p>
        </div>
        <Image
          className="productImage"
          alt={imageAlt}
          src={imageSrc}
          priority={false}
          placeholder="blur"
          width={width}
          height={height}
        />
        <ProductTextContent>
          <div className="productPresentation">
            <h3>{title}</h3>
            <p>{desc}</p>
            <div className="productRating">
              <p>*</p>
              <p>{rating}</p>
            </div>
          </div>
          <div className="productAttention">
            <div className="productContainPrices">
              <p className="productDiscount">R$ 249,00</p>
              <p className="productPrice">{price}</p>
            </div>
            <button className="buttonBuy">comprar</button>
          </div>
        </ProductTextContent>
      </Link>
    </CartProduct>
  );
}
