import { FC } from 'react';
import { ButtonStyled } from './styles';
import { Props } from './types';

const MainButton: FC<Props> = ({ label, backgroundColor = '#6356a5', ...props }: Props) => {
  return (
    <ButtonStyled type="button" backgroundColor={backgroundColor} {...props}>
      {label}
    </ButtonStyled>
  );
};

export default MainButton;
