import { ButtonElement } from './style';

function Button({ children }) {
  return (
    <ButtonElement>
      {children}
    </ButtonElement>
  );
}

export default Button;
