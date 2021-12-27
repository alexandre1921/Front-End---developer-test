import { Chart } from 'components/Chart';
import { Table } from 'components/Table';
import { FC } from 'react';
import { DashboardStatusContainer, ItemContainer, ContainerHeader } from './styles';
import { Props } from './types';

const Component: FC<Props> = ({ chartProps, tableProps }: Props) => {
  return (
    <DashboardStatusContainer>
      <ItemContainer>
        <ContainerHeader>Your sales for the last 7 days</ContainerHeader>
        <Chart {...chartProps} />
      </ItemContainer>
      <ItemContainer>
        <ContainerHeader>Your bestsellers</ContainerHeader>
        <Table {...tableProps} />
      </ItemContainer>
    </DashboardStatusContainer>
  );
};

export default Component;
