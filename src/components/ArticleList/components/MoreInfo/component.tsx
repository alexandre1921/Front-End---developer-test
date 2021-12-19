import { FC } from 'react';
import { CategoryItemContainer, MoreInfoTitle, MoreInfoDescription } from './styles';
import { Props } from './types';

const Component: FC<Props> = ({ title, description }: Props) => {
  return (
    <CategoryItemContainer>
      <MoreInfoTitle>{title}</MoreInfoTitle>
      <MoreInfoDescription>{description}</MoreInfoDescription>
    </CategoryItemContainer>
  );
};

export default Component;
