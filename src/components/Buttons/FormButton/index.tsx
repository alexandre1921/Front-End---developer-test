import { FC } from 'react';
import { ButtonStyled } from './styles';
import { Props } from './types';

const FormButton: FC<Props> = ({ label, ...props }: Props) => {
  return (
    <ButtonStyled type="button" {...props}>
      {label}
    </ButtonStyled>
  );
};

export default FormButton;
