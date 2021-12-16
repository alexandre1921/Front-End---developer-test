import { FC } from 'react';
import { ButtonStyled } from './styles';
import { Props } from './types';

const CartButton: FC<Props> = ({
  label,
  backgroundColor = '#292C35',
  color = '#FEC92E',
  ...props
}: Props) => {
  return (
    <ButtonStyled type="button" backgroundColor={backgroundColor} color={color} {...props}>
      {label}
    </ButtonStyled>
  );
};

export default CartButton;
