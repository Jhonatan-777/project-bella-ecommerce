"use client";

import { flex, limitWidth } from "@/app/styles/mixins";
import { products } from "@/data/constants/products";
import { useCart } from "@/data/contexts/CartContext";
import { useLocalStorage } from "@/data/hooks/useLocalStorage";
import Product from "@/data/model/Product";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

type ProductPageProps = {
  params: {
    id: number;
  };
};

const ContainerProduct = styled.section`
  width: 100%;

  ${flex("center", "center")};
  flex-direction: column;
  padding: 20px 0;

  .container {
    width: 90%;
    ${limitWidth}
    ${flex("space-between", "start")};
    gap: 20px;
    flex-wrap: wrap;

    @media (max-width: 990px) {
      ${flex("center", "start")};
    }
  }
`;

const GroupImage = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${flex("center", "center")};

  .imagesMin {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .imageBox {
      width: 70px;
      height: 90px;
      background-color: gray;
    }

    @media (max-width: 540px) {
      flex-direction: row;
    }
  }

  .imagesMax {
    width: 400px;
    height: 500px;
    padding: 10px;

    @media (max-width: 540px) {
      width: 350px;
      height: 450px;
    }
  }
`;

const InfoProduct = styled.div`
  display: flex;
  flex-direction: column;

  .title {
    font-family: var(--font-title);
    font-size: ${({ theme }) => theme.fontSizes.xl};
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.black};
    font-weight: 400;
    letter-spacing: 1.1px;
    margin-bottom: 5px;
  }
  .desc {
    font-size: ${({ theme }) => theme.fontSizes.s};
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.black};
    font-weight: 400;
    letter-spacing: 1px;
    margin-bottom: 5px;
  }

  .containerAvaliacao {
    display: flex;
    gap: 10px;

    .textInfo {
      font-size: ${({ theme }) => theme.fontSizes.xs};
      text-transform: capitalize;
      color: ${({ theme }) => theme.colors.neutralColor};
      font-weight: 400;
    }
  }

  .textInfo {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme }) => theme.colors.neutralColor};
    font-weight: 400;
  }

  .containerPrice {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-bottom: 20px;

    .price {
      font-family: var(--font-title);
      font-size: ${({ theme }) => theme.fontSizes.xxl};
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.primaryColor010};
      font-weight: 400;
      line-height: 50px;
    }
    .priceInfo {
      font-size: ${({ theme }) => theme.fontSizes.s};
      color: ${({ theme }) => theme.colors.black};
      font-weight: 400;
    }
  }

  .containerButtons {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;

    .containBtnAmount {
      ${flex("center", "center")};
      border: 2px solid ${({ theme }) => theme.colors.neutralColorLight};
      border-radius: 4px;

      .btnAmount {
        padding: 10px 10px;
        background-color: transparent;

        font-family: var(--font-title);
        border: none;
        font-size: ${({ theme }) => theme.fontSizes.xs};
        color: ${({ theme }) => theme.colors.black};
        font-weight: 400;
        cursor: pointer;
        transition: all 0.2s;
      }

      .numberAmount {
        text-align: center;
        width: 3ch;
        font-size: ${({ theme }) => theme.fontSizes.s};
        color: ${({ theme }) => theme.colors.black};
        font-weight: 400;
      }
    }

    .btn {
      padding: 10px 20px;
      background-color: transparent;
      border-radius: 4px;
      font-family: var(--font-title);
      border: 2px solid ${({ theme }) => theme.colors.neutralColorLight};
      font-size: ${({ theme }) => theme.fontSizes.xs};
      color: ${({ theme }) => theme.colors.black};
      font-weight: 400;
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.secondaryColor};
        border: 2px solid ${({ theme }) => theme.colors.secondaryColor};
      }
    }
  }
`;

const ContainerTamanho = styled.div`
  margin-bottom: 10px;

  .textInfo {
    font-size: ${({ theme }) => theme.fontSizes.s};
    text-transform: capitalize;
    margin-bottom: 5px;
  }

  .list {
    display: flex;
    list-style: none;
    gap: 10px;

    li {
      input {
        display: none;
      }

      label {
        width: 30px;
        height: 30px;
        background-color: ${({ theme }) => theme.colors.neutralColorLight};
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
        border-radius: 4px;
        font-size: ${({ theme }) => theme.fontSizes.s};
        color: ${({ theme }) => theme.colors.black};
        font-weight: 400;
        cursor: pointer;
        transition: all 0.2s;

        &:hover,
        &:focus {
          background-color: ${({ theme }) => theme.colors.primaryColor010};
          color: ${({ theme }) => theme.colors.white};
        }
      }

      input:checked + label {
        background-color: ${({ theme }) => theme.colors.primaryColor010};
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;

const ContainerCor = styled.div`
  margin-bottom: 20px;

  .textInfo {
    font-size: ${({ theme }) => theme.fontSizes.s};
    text-transform: capitalize;
    margin-bottom: 5px;
  }

  .list {
    display: flex;
    list-style: none;
    gap: 5px;

    li {
      input {
        display: none;
      }

      label {
        width: 30px;
        height: 30px;
        background-color: ${({ theme }) => theme.colors.neutralColorLight};
        ${flex("center", "center")};
        text-transform: uppercase;
        border-radius: 50%;
        font-size: ${({ theme }) => theme.fontSizes.s};
        cursor: pointer;
        transition: all 0.2s;

        &:hover,
        &:focus {
          border: 4px solid ${({ theme }) => theme.colors.primaryColor010};
        }
      }

      &:nth-child(1) label {
        background-color: ${({ theme }) => theme.colors.neutralColor};
      }

      &:nth-child(2) label {
        background-color: ${({ theme }) => theme.colors.black};
      }

      &:nth-child(3) label {
        background-color: ${({ theme }) => theme.colors.attention};
      }

      input:checked + label {
        border: 4px solid ${({ theme }) => theme.colors.primaryColor010};
      }
    }
  }
`;

function getProductById(id: number): Product | undefined {
  return products.find((product) => Number(product.id) === id);
}

export default function ProductPage({ params: { id } }: ProductPageProps) {
  const product = getProductById(Number(id));
  const { addToCart } = useCart();
  const [amount, setAmount] = useState(1);

  if (!product) {
    return <div>Produto não encontrado.</div>;
  }

  const handleAddToCart = () => {
    addToCart({
      ...product, // Passa as informações do produto
      quantity: amount, // Adiciona a quantidade
    });
  };

  return (
    <ContainerProduct>
      <div className="container">
        <GroupImage>
          <div className="imagesMin">
            <div className="imageBox">img</div>
            <div className="imageBox">img</div>
            <div className="imageBox">img</div>
            <div className="imageBox">img</div>
          </div>
          <div className="imagesMax">
            <Image
              src={product.imageSrc}
              alt={product.imageAlt}
              priority={false}
              placeholder="blur"
              // width={product.width}
              // height={product.height}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </GroupImage>

        <InfoProduct>
          <form>
            <h1 className="title">{product.title}</h1>
            <p className="desc">{product.desc}</p>
            <div className="containerAvaliacao">
              <div className="starInfo">*****</div>
              <p className="textInfo">5 Avaliações</p>
            </div>
            <p className="textInfo">Vendido e entregue por Marca</p>
            <div className="containerPrice">
              <p className="price">{product.price}</p>
              <p className="priceInfo">5x de R$ 50,00 sem juros no cartão</p>
            </div>
            <ContainerTamanho>
              <p className="textInfo">Tamanho</p>
              <ul className="list">
                {["pp", "p", "m", "g", "xg"].map((size) => (
                  <li key={size}>
                    <input
                      type="radio"
                      id={size}
                      name="fav_tamanho"
                      value={size}
                    />
                    <label htmlFor={size}>{size}</label>
                  </li>
                ))}
              </ul>
            </ContainerTamanho>
            <ContainerCor>
              <p className="textInfo">Cor</p>
              <ul className="list">
                {["pri", "seg", "ter"].map((cor) => (
                  <li key={cor}>
                    <input type="radio" id={cor} name="fav_cor" value={cor} />
                    <label htmlFor={cor} />
                  </li>
                ))}
              </ul>
            </ContainerCor>
            <div className="containerButtons">
              <div className="containBtnAmount">
                <p
                  className="btnAmount"
                  onClick={() => setAmount(amount - 1 > 0 ? amount - 1 : 1)}
                >
                  -
                </p>
                <p className="numberAmount">{amount}</p>
                <p className="btnAmount" onClick={() => setAmount(amount + 1)}>
                  +
                </p>
              </div>
              <button type="button" className="btn" onClick={handleAddToCart}>
                Adicionar ao Carrinho
              </button>
              <Link href="/login" className="btn">
                Add ao Favoritos
              </Link>
            </div>
          </form>
        </InfoProduct>
      </div>
    </ContainerProduct>
  );
}
