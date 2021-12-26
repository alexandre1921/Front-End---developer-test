interface IChartData {
  /**
   * Data's label
   */
  name: string;
  /**
   * Sales quantity
   */
  sales: number;
}

export interface Props {
  /**
   * Items to render in the chart
   */
  data: Array<IChartData>;
}
