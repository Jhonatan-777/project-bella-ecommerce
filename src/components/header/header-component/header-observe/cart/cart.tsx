import { useCart } from "@/data/contexts/CartContext";
import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { CartControl } from "./cart-control";
import { flex } from "@/app/styles/mixins";

const ContainerHeaderCart = styled.div`
  .sacola {
    display: flex;
    gap: 2px;
    line-height: 20px;

    color: ${({ theme }) => theme.colors.neutralColorStrong};
    font-size: ${({ theme }) => theme.fontSizes.s};

    border: none;
    background-color: transparent;

    cursor: pointer;
  }

  .cart-overlay {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1000;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .cart-content {
    background: white;
    width: 400px;
    height: 100vh;
    border-radius: 8px;
    overflow-y: auto;
    position: relative;

    .title {
      text-align: center;
      padding: 20px;
      letter-spacing: 1px;
      text-transform: capitalize;
      color: ${({ theme }) => theme.colors.black};
      font-size: ${({ theme }) => theme.fontSizes.l};
      font-weight: 700;
      background-color: ${({ theme }) => theme.colors.secondaryColorLight};
    }

    .subtitle {
      padding: 10px;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.black};
      font-size: ${({ theme }) => theme.fontSizes.m};
      font-weight: 400;
    }

    .cart-container {
      width: 100%;

      .cart {
        display: flex;
        border: 1px solid rgba(0, 0, 0, 0.2);

        .image-item {
          width: 100px;
          height: 100px;
          background-color: gray;
        }

        .desc-item {
          position: relative;
          flex-grow: 1;
          padding: 10px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          .title-item {
            letter-spacing: 1px;
            text-transform: capitalize;
            color: ${({ theme }) => theme.colors.black};
            font-size: ${({ theme }) => theme.fontSizes.m};
            font-weight: 400;
          }

          .numbers-item {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .quantity-item {
              display: flex;
              border: 1px solid ${({ theme }) => theme.colors.neutralColorLight};
              border-radius: 4px;
              background-color: transparent;

              button,
              p {
                color: ${({ theme }) => theme.colors.black};
                font-size: ${({ theme }) => theme.fontSizes.m};
                font-weight: 400;
                padding: 10px;
                border: none;
                background-color: transparent;

                &.quantity-modify {
                  cursor: pointer;
                }
              }
            }

            .price-item {
              color: ${({ theme }) => theme.colors.black};
              font-size: ${({ theme }) => theme.fontSizes.l};
              font-weight: 400;
            }
          }

          .remove-btn {
            width: 20px;
            height: 20px;
            ${flex("center", "center")};
            position: absolute;
            top: 10px;
            right: 10px;
            font-size: 20px;
            cursor: pointer;
            background-color: ${({ theme }) =>
              theme.colors.secondaryColorLight};
            border: none;

            &:hover {
              background-color: ${({ theme }) =>
                theme.colors.secondaryColorStrong};
            }
          }
        }
      }
    }
  }

  .close-btn {
    width: 20px;
    height: 20px;
    ${flex("center", "center")};
    position: absolute;
    top: 20px;
    right: 10px;
    font-size: 20px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.secondaryColor};
    border: none;

    &:hover {
      background-color: ${({ theme }) => theme.colors.secondaryColorStrong};
    }
  }
`;
export default function HeaderCart() {
  const { cartItems, updateCartItem, removeCartItem } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Função para abrir ou fechar a sacola
  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  // Fechar sacola ao clicar fora dela
  const closeCart = () => {
    setIsCartOpen(false);
  };

  const handleIncreaseQuantity = (itemId: number, quantity: number) => {
    updateCartItem(itemId, quantity + 1);
  };

  const handleDecreaseQuantity = (itemId: number, quantity: number) => {
    if (quantity > 1) {
      updateCartItem(itemId, quantity - 1);
    }
  };

  const handleRemoveItem = (itemId: number) => {
    removeCartItem(itemId);
  };

  return (
    <ContainerHeaderCart>
      <button onClick={toggleCart} className="sacola">
        Sacola
        <CartControl />
      </button>

      {/* Navegação da sacola (overlay) */}
      {isCartOpen && (
        <div className="cart-overlay" onClick={closeCart}>
          <div className="cart-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeCart}>
              &times;
            </button>
            <h2 className="title">Minha Sacola</h2>
            <p className="subtitle">Meus Produtos</p>
            {cartItems.length === 0 ? (
              <p>Sua sacola está vazia.</p>
            ) : (
              <div className="cart-container">
                {cartItems.map((item, index) => (
                  <div className="cart" key={index}>
                    <div className="image-item">
                      <div>img</div>
                    </div>
                    <div className="desc-item">
                      <h3 className="title-item">{item.title}</h3>
                      <div className="numbers-item">
                        <div className="quantity-item">
                          <button
                            className="quantity-modify"
                            onClick={() =>
                              handleDecreaseQuantity(item.id, item.quantity)
                            }
                          >
                            -
                          </button>
                          <p>{item.quantity}</p>
                          <button
                            className="quantity-modify"
                            onClick={() =>
                              handleIncreaseQuantity(item.id, item.quantity)
                            }
                          >
                            +
                          </button>
                        </div>
                        <p className="price-item">
                          {(
                            parseFloat(
                              item.price.replace("R$", "").replace(",", ".")
                            ) * item.quantity
                          ).toFixed(2)}
                        </p>
                      </div>

                      <button
                        className="remove-btn"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        &times;
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <Link href="/logger">Finalizar Compra</Link>
          </div>
        </div>
      )}
    </ContainerHeaderCart>
  );
}
