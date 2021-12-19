import styled from 'styled-components';
import { ButtonStyled as FollowButton } from 'components/Buttons/FollowButton/styles';

export const AuthorInfoAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-style: solid;
  border-width: 2px;
  border-color: #fec92e;
  border-radius: 100%;
`;

export const AuthorInfoName = styled.h4`
  color: #000000;
  font-size: 10px;
  font-family: Helvetica;
  font-weight: medium;
  text-transform: captalize;
`;

export const AuthorInfoRole = styled.h4`
  color: #000000;
  opacity: 0.5;
  font-size: 7px;
  font-family: Helvetica;
  font-weight: normal;
  text-transform: uppercase;
`;

export const AuthorInfoContainer = styled.div`
  display: flex;

  > ${AuthorInfoAvatar} + div.more-about {
    margin-left: 8px;
  }

  > div.more-about {
    flex: 1;
    align-self: center;

    > div.first-row {
      display: flex;

      > ${AuthorInfoName} {
        flex: 1;
        margin: 0;
      }

      > ${FollowButton} {
        align-self: center;
      }

      & + ${AuthorInfoRole} {
        margin-top: 3px;
      }
    }

    > ${AuthorInfoRole} {
      margin: 0;
    }
  }
`;
