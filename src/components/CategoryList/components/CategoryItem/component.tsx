import { FC } from 'react';
import {
  CategoryItemContainer,
  CategoryItemShowStatusColor,
  CategoryItemShowStatusText,
  CategoryItemDescription,
  CategoryItemName
} from './styles';
import { Props } from './types';

const Component: FC<Props> = ({ description, name, position, active = false, onClick }: Props) => {
  return (
    <CategoryItemContainer onClick={onClick}>
      <div className="position">
        <CategoryItemShowStatusText active={active}>{position}</CategoryItemShowStatusText>
        <CategoryItemShowStatusColor active={active} />
      </div>
      <div className="content">
        <CategoryItemDescription>{description}</CategoryItemDescription>
        <CategoryItemName>{name}</CategoryItemName>
      </div>
    </CategoryItemContainer>
  );
};

export default Component;
