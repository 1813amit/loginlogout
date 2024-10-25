import React, { useEffect } from 'react';
import { Chart } from 'chart.js/auto';

const Graph = () => {
  useEffect(() => {
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'User Activity',
            data: [65, 59, 80, 81, 56, 55],
            borderColor: 'rgba(75, 192, 192, 1)',
            fill: false,
          },
        ],
      },
    });
  }, []);

  return <canvas id="myChart"></canvas>;
};

export default Graph;
