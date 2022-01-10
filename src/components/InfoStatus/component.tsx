import { FC } from 'react';
import {
  InfoStatusContainer,
  HeaderContainer,
  BodyContainer,
  StatusContainer,
  Status
} from './styles';
import { Props } from './types';

const Component: FC<Props> = ({
  mainIcon: Icon,
  firstButton: { onClick: firstButtonHandleOnClick, icon: FirstButtonIcon },
  secondButton: { onClick: secondButtonHandleOnClick, icon: SecondButtonIcon },
  status,
  title
}: Props) => {
  return (
    <InfoStatusContainer>
      <HeaderContainer>
        <div className="icon-container">
          <Icon />
        </div>
        <h3>{title}</h3>
        <button type="button" onClick={firstButtonHandleOnClick} aria-label="first button icon">
          <FirstButtonIcon />
        </button>
        <button type="button" onClick={secondButtonHandleOnClick} aria-label="second button icon">
          <SecondButtonIcon />
        </button>
      </HeaderContainer>
      <BodyContainer>
        <StatusContainer>
          {status.map(({ name, value }) => (
            <Status>
              <h5>{name}</h5>
              <p>{value}</p>
            </Status>
          ))}
        </StatusContainer>
      </BodyContainer>
    </InfoStatusContainer>
  );
};

export default Component;
