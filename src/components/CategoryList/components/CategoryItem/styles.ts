import styled from 'styled-components';

interface CategoryItemShowStatusProps {
  active: boolean;
}

export const CategoryItemShowStatusText = styled.h3<CategoryItemShowStatusProps>`
  text-align: left;
  font-size: 23px;
  font-family: Helvetica;
  font-weight: medium;
  color: ${(props) => (props.active ? '#FEC92E' : '#A9A7B1')};
`;

export const CategoryItemShowStatusColor = styled.div<CategoryItemShowStatusProps>`
  background-color: ${(props) => (props.active ? '#FEC92E' : '#000000')};
`;

export const CategoryItemDescription = styled.h4`
  text-align: left;
  font-size: 15px;
  font-family: Helvetica;
  font-weight: medium;
  color: #000000;
  opacity: 0.5;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CategoryItemName = styled.h5`
  text-align: left;
  font-size: 17px;
  font-family: Helvetica;
  font-weight: medium;
  color: #000000;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CategoryItemContainer = styled.div`
  display: flex;
  height: 34px;
  cursor: pointer;

  > div.position {
    margin-right: 14px;

    ${CategoryItemShowStatusText} {
      margin: 0;
      margin-bottom: 5px;
    }

    ${CategoryItemShowStatusColor} {
      width: 95%;
      height: 4px;
      margin: auto;
    }
  }

  > div.content {
    max-width: 270px;

    ${CategoryItemDescription} {
      margin: 0;
      margin-top: 3.5px;
    }
    ${CategoryItemName} {
      margin: 0;
      margin-bottom: 3.5px;
    }
  }
`;
