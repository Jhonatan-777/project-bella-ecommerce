"use client";

import { css } from "styled-components";

export const flex = (justify = "center", align = "center") => css`
  display: flex;
  justify-content: ${justify};
  align-items: ${align};
`;

export const limitWidth = css`
  max-width: 1200px;
`;
