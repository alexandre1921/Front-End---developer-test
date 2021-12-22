import { CartResumeTitle, CartResumeValueContainer } from 'components/CartResume/styles';
import HR from 'components/HR';
import Table from 'components/Table/component';
import { FC } from 'react';
import { YourCartContainer } from './styles';
import { Props } from './types';

const Component: FC<Props> = ({ subtotal, tableProps }: Props) => {
  return (
    <YourCartContainer>
      <CartResumeTitle>Your cart</CartResumeTitle>
      <Table {...tableProps} />
      <HR />
      <CartResumeValueContainer>
        <b>Subtotal</b>
        <p>{subtotal}</p>
      </CartResumeValueContainer>
    </YourCartContainer>
  );
};

export default Component;
