import { css } from "styled-components";

export const setBgColor = ({ bgColor }) => bgColor || "brown";
export const setGridCenter = css`
  display: grid;
  justify-items: center;
  align-items: center;
`;
