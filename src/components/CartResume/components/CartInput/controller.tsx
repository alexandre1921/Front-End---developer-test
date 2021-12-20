import { FC, useCallback, useState, ChangeEvent, useEffect } from 'react';
import { Props, ExternalProps } from './types';

const useController = (Component: FC<Props>, { defaultValue, ...externalProps }: ExternalProps) => {
  const [isHeaderPlaceholderShown, setIsHeaderPlaceholderShown] = useState(!!defaultValue);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    setIsHeaderPlaceholderShown(!!inputText);
  }, [inputText]);

  const handleOnChangeInput = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      setInputText(value);
    },
    []
  );

  const props: Props = {
    isHeaderPlaceholderShown,
    defaultValue,
    ...externalProps,
    handleOnChangeInput
  };

  return <Component {...props} />;
};

export default useController;
