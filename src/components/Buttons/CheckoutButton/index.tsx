import { FC } from 'react';
import { MdShoppingBag } from 'react-icons/md';
import { ButtonStyled } from './styles';

const CheckoutButton: FC = () => {
  return (
    <ButtonStyled type="button" aria-label="checkout">
      <MdShoppingBag width="18px" height="20px" />
    </ButtonStyled>
  );
};

export default CheckoutButton;
