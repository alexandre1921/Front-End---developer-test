import { useAuth } from 'hooks/Auth';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainButton, CheckoutButton } from '../Buttons';
import { Props as MainButtonProps } from '../Buttons/MainButton/types';
import { Props } from './types';

const useController = (Component: FC<Props>) => {
  const { user, signIn, signOut } = useAuth();
  const navigate = useNavigate();

  const src = './assets/logo.svg';

  const handleOnClickCheckoutButton = () => {
    navigate('/signin');
  };
  const middleButton = <CheckoutButton onClick={handleOnClickCheckoutButton} />;

  const lastButtonProps: MainButtonProps = user
    ? { label: 'Logout', onClick: signOut }
    : { label: 'Sign In', onClick: signIn };
  const lastButton = <MainButton {...lastButtonProps} />;

  return <Component src={src} middleButton={middleButton} lastButton={lastButton} />;
};

export default useController;
