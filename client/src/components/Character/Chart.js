import { PieChart, LineChart, RadarChart } from '@toast-ui/react-chart';
import '@toast-ui/chart/dist/toastui-chart.min.css';

export const SampleChart = () => {
  const data = {
    categories: ['행복', '슬픔', '평온', '놀람', '솔직함'],
    series: [
      {
        name: '나문희',
        data: [5000, 3000, 5000, 7000, 6000, 4000],
      },
    ],
  };

  const options = {
    chart: {
      width: 'auto',
      height: 'auto',
      format: '1,000',
      animation: {
        duration: 500,
      },
    },
    yAxis: {
      title: 'Month',
    },
    xAxis: {
      title: 'Amount',
      min: 0,
      max: 9000,
      suffix: '$',
    },
    legend: {
      visible: true,
      showCheckbox: false,
      align: 'bottom',
    },
    exportMenu: {
      visible: false,
    },
    series: {
      showLabel: true,
      selectable: false,
      clockwise: false,
      dataLabels: {
        visible: true,
        anchor: 'outer',
      },
      radiusRange: {
        inner: '40%',
        outer: '100%',
      },
      showArea: true,
    },
  };

  return (
    <div>
      <RadarChart
        data={data}
        options={options}
        style={{ width: '30vw', height: '40vh' }}
      />
    </div>
  );
};

export const FeelingChart = () => {
  const data = {
    categories: ['Feeling'],
    series: [
      {
        name: '행복',
        data: 5,
      },
      {
        name: '슬픔',
        data: 2,
      },
      {
        name: '놀람',
        data: 4,
      },
      {
        name: '화남',
        data: 7,
      },
      {
        name: '평온',
        data: 8,
      },
    ],
  };

  const options = {
    chart: {
      width: 'auto',
      height: 'auto',
      format: '1,000',
      animation: {
        duration: 500,
      },
    },
    yAxis: {
      title: 'Month',
    },
    xAxis: {
      title: 'Amount',
      min: 0,
      max: 9000,
      suffix: '$',
    },
    legend: {
      visible: true,
      showCheckbox: false,
      align: 'bottom',
    },
    exportMenu: {
      visible: false,
    },
    series: {
      showLabel: true,
      selectable: false,
      clockwise: false,
      dataLabels: {
        visible: true,
        anchor: 'outer',
      },
      radiusRange: {
        inner: '40%',
        outer: '100%',
      },
    },
  };

  return (
    <div>
      <PieChart
        data={data}
        options={options}
        style={{ width: '30vw', height: '40vh' }}
      />
    </div>
  );
};

export const AmountChart = () => {
  const data = {
    categories: ['June', 'July', 'Aug', 'Sep', 'Oct', 'Nov'],
    series: [
      {
        name: 'Income',
        data: [8000, 1000, 7000, 2000, 5000, 3000],
      },
    ],
  };

  const options = {
    chart: {
      width: 'auto',
      height: 'auto',
      // title: 'Monthly Revenue',
      format: '1,000',
    },
    yAxis: {
      title: 'Month',
    },
    xAxis: {
      title: 'Amount',
      min: 0,
      max: 9000,
      suffix: '$',
    },
    series: {
      showLabel: true,
    },
    legend: {
      visible: false,
      showCheckbox: false,
    },
  };

  return (
    <>
      <LineChart
        data={data}
        options={options}
        style={{ width: '30vw', height: '40vh' }}
      />
    </>
  );
};
