// "use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import styled from "styled-components";

const ContainerHeaderAuth = styled.div`
  display: flex;

  button {
    cursor: pointer;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.neutralColorStrong};
    font-size: ${({ theme }) => theme.fontSizes.s};
    padding: 10px 10px;
    background: none;
    border: none;
  }
`;

export default function HeaderAuth() {
  return (
    <ContainerHeaderAuth>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <button>Login</button>
        </SignInButton>
      </SignedOut>
    </ContainerHeaderAuth>
  );
}
