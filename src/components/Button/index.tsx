import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick,  }: IButtonProps): JSX.Element => {
  return <ButtonContainer onClick={onClick}>{title}</ButtonContainer>;
};

export default Button;
