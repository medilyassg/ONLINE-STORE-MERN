import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCommands } from '../../Redux/commandSlice';
import ApexCharts from 'react-apexcharts';
import Title from './Title';

export default function Chart() {
  const commands = useSelector((state) => state.commandes.commands);
  const dispatch = useDispatch();

  React.useEffect(() => {
    // Fetch the commands data when the component mounts
    dispatch(fetchCommands());
  }, [dispatch]);

  // Convert the commands data into an array of objects that can be displayed by the chart
  const data = [];
  const dateMap = new Map();
  commands.forEach((command) => {
    const date = new Date(command.createdAt);
    const dateString = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    const hour = date.getHours();
    const amount = command.totalAmount;
    if (dateMap.has(dateString)) {
      const amountsByHour = dateMap.get(dateString);
      if (amountsByHour[hour]) {
        amountsByHour[hour] += amount;
      } else {
        amountsByHour[hour] = amount;
      }
    } else {
      dateMap.set(dateString, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
      const amountsByHour = dateMap.get(dateString);
      amountsByHour[hour] = amount;
    }
  });
  for (let i = 0; i < 24; i += 3) {
    const time = `${i.toString().padStart(2, '0')}:00`;
    const date = new Date();
    date.setHours(i);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    const dateString = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    const amountsByHour = dateMap.get(dateString);
    const amount = amountsByHour ? amountsByHour[i] : 0;
    data.push({ x: time, y: amount });
  }

  const options = {
    chart: {
      id: 'line-chart',
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: data.map((item) => item.x),
      labels: {
        style: {
          colors: '#555',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: '#555',
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
    },
  };

  const series = [
    {
      name: 'Total Amount',
      data: data.map((item) => item.y),
    },
  ];

  return (
    <React.Fragment>
      <Title>Today</Title>
      <ApexCharts options={options} series={series} type="line" height={190} />
    </React.Fragment>
  );
}
