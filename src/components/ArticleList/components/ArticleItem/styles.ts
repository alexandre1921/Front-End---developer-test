import styled from 'styled-components';
import { AuthorInfoContainer } from '../AuthorInfo/styles';
import { CategoryItemContainer } from '../MoreInfo/styles';

export const ArticleItemTitle = styled.div`
  color: #000000;
  font-size: 34px;
  font-family: Helvetica;
  font-weight: medium;
`;

export const ArticleItemImage = styled.img`
  width: 435px;
  height: 239px;
`;

export const VR = styled.div`
  width: 0px;
  height: 35px;
  border: 1px solid #000000;
  opacity: 0.5;
`;

export const ArticleItemContainer = styled.div`
  width: 450px;
  background-color: #fff;
  border-radius: 16px;
  margin: 0;
  padding-bottom: 1px;

  > ${ArticleItemImage} {
    width: 100%;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }

  > div.info-content {
    margin: 16px;
    margin-top: 0px;

    > ${ArticleItemTitle} {
      margin-top: 25px;
    }

    > div.info {
      display: flex;
      margin-top: 27px;

      > ${AuthorInfoContainer} {
        width: 170px;
        margin-right: 50px;
      }

      > ${CategoryItemContainer} {
        margin-top: 2px;
        margin-left: 8px;
      }

      > ${AuthorInfoContainer} + ${VR} + ${CategoryItemContainer} {
        width: 154px;
        margin-right: 20px;
      }

      > ${CategoryItemContainer} + ${VR} + ${CategoryItemContainer} {
        width: 80px;
      }
    }
  }
`;
