import { FormStyled } from "./style";

const Form = () => {
  return (
    <FormStyled bgColor={"green"}>
      <input className="name" type="text" placeholder="name" />
      <button>enviar</button>
    </FormStyled>
  );
};

export default Form;
