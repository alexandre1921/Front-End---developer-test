import { FC } from 'react';
import {
  ResponsiveContainer,
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { Props } from './types';

const textProps = {
  color: '#3D3D3D',
  fontWeight: 400,
  fontFamily: 'Lato'
};

const Component: FC<Props> = ({ data }: Props) => {
  return (
    <ResponsiveContainer width="100%" height="100%" aspect={3.1}>
      <LineChart
        width={700}
        height={210}
        data={data}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          {...textProps}
          fontSize="12px"
          dataKey="name"
          tickMargin={15}
          height={40}
          angle={-45}
        />
        <YAxis {...textProps} fontSize="14px" />
        <Tooltip />
        <Line type="monotone" dataKey="sales" stroke="#82ca9d" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Component;
