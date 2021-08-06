import { ButtonElement } from './style';

function Button({ children, ...props }) {
  return (
    <ButtonElement {...props}>
      {children}
    </ButtonElement>
  );
}

export default Button;
