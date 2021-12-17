import { FC } from 'react';
import { HeaderContainer, LogoContainer } from './styles';
import { Props } from './types';

const Component: FC<Props> = ({ src, firstButton, lastButton, middleButton }: Props) => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <img alt="logo" src={src} />
      </LogoContainer>
      {firstButton}
      {middleButton}
      {lastButton}
    </HeaderContainer>
  );
};

export default Component;
