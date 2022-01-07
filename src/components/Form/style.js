import styled from "styled-components";
import { colorInputs } from "./colors";
import { setBgColor, setGridCenter } from "./services";

export const FormStyled = styled.form`
  background-color: ${setBgColor};
  .name {
    background-color: ${colorInputs};
  }
  button {
    background-color: burlywood;
    &:hover {
      background-color: green;
    }
  }
  ${setGridCenter};
`;

export const FormTwo = styled(FormStyled)`
  background-color: burlywood;
`;
