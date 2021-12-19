import { FC } from 'react';
import { FollowButton } from '../../../Buttons';
import { AuthorInfoAvatar, AuthorInfoContainer, AuthorInfoName, AuthorInfoRole } from './styles';
import { Props } from './types';

const Component: FC<Props> = ({ avatarURL, name, currentRole }: Props) => {
  return (
    <AuthorInfoContainer>
      <AuthorInfoAvatar src={avatarURL} alt="avatar" />
      <div className="more-about">
        <div className="first-row">
          <AuthorInfoName>{name}</AuthorInfoName>
          <FollowButton label="Follow" />
        </div>
        <AuthorInfoRole>{currentRole}</AuthorInfoRole>
      </div>
    </AuthorInfoContainer>
  );
};

export default Component;
