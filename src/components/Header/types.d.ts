import { ReactNode } from 'react';

export interface Props {
  src: string;
  firstButton?: ReactNode;
  middleButton?: ReactNode;
  lastButton: ReactNode;
}
