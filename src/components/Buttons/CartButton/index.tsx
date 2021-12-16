import { FC } from 'react';
import { ButtonStyled } from './styles';
import { Props } from './types';

const CartButton: FC<Props> = ({ label, color = '#FEC92E', ...props }: Props) => {
  return (
    <ButtonStyled type="button" color={color} {...props}>
      {label}
    </ButtonStyled>
  );
};

export default CartButton;
