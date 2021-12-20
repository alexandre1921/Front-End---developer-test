import { CartButton } from 'components/Buttons';
import { FC } from 'react';
import CartInput from './components/CartInput';
import {
  CartResumeContainer,
  CartResumeTitle,
  CartResumeValueContainer,
  CartResumeTotal,
  HR
} from './styles';
import { Props } from './types';

const Component: FC<Props> = ({
  discount,
  subTotal,
  total,
  handleOnClickCheckout,
  handleOnClickKeepBuying
}: Props) => {
  return (
    <CartResumeContainer>
      <CartResumeTitle>Resume</CartResumeTitle>
      <CartInput placeholder="Discount coupon" />
      <CartResumeValueContainer>
        <b>Subtotal</b>
        <p>{subTotal}</p>
      </CartResumeValueContainer>
      <CartResumeValueContainer isShown={!!discount}>
        <b>Discount</b>
        <p>{discount}</p>
      </CartResumeValueContainer>
      <HR />
      <CartResumeTotal>
        <p>Total</p>
        <b>{total}</b>
      </CartResumeTotal>
      <div className="cart-button-container">
        <CartButton label="Checkout" color="#FEC92E" onClick={handleOnClickCheckout} />
        <CartButton label="Keep buying" color="#292C35" outline onClick={handleOnClickKeepBuying} />
      </div>
    </CartResumeContainer>
  );
};

export default Component;
