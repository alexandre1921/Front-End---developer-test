/* eslint-disable react/prop-types */
import { AuthProvider } from 'hooks/Auth';
import { FC } from 'react';

const AppProvider: FC = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default AppProvider;
