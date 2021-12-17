import { FC } from 'react';
import { MdShoppingBag } from 'react-icons/md';
import { ButtonStyled } from './styles';
import { Props } from './types';

const CheckoutButton: FC<Props> = ({ ...props }: Props) => {
  return (
    <ButtonStyled type="button" aria-label="checkout" {...props}>
      <MdShoppingBag width="18px" height="20px" />
    </ButtonStyled>
  );
};

export default CheckoutButton;
