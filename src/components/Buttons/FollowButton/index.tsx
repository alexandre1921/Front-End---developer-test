import { FC } from 'react';
import { ButtonStyled } from './styles';
import { Props } from './types';

const FollowButton: FC<Props> = ({ label, backgroundColor = '#fec92e', ...props }: Props) => {
  return (
    <ButtonStyled type="button" backgroundColor={backgroundColor} {...props}>
      {label}
    </ButtonStyled>
  );
};

export default FollowButton;
