import { FC } from 'react';
import { InputContainer, InputStyled, InputPlaceholder } from './styles';
import { Props } from './types';

const Component: FC<Props> = ({
  placeholder,
  isHeaderPlaceholderShown,
  handleOnChangeInput,
  ...props
}: Props) => {
  return (
    <InputContainer>
      <InputPlaceholder isShown={isHeaderPlaceholderShown}>{placeholder}</InputPlaceholder>
      <InputStyled onChange={handleOnChangeInput} placeholder={placeholder} {...props} />
    </InputContainer>
  );
};

export default Component;
