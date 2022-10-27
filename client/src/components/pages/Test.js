import React from 'react';
import Chart from '../Chart';
import styles from './Test.module.scss';

const Test = () => {

    const lineChartData = {
        labels: [1, 2, 3, 4],
        datasets: [{
          label: 'Water Usage',
          data: [1, 2, 3],
          fill: true,
          fillColor: '#002959',
          backgroundColor: 'rgba(0, 41, 89, .6)',
          borderColor: '#357ACB',
          tension: 0.1
        }]
      };

    return (
        <div className={styles.container}>
            <Chart
                data={ lineChartData }
                chartType="bar"
            />
        </div>
    );
};

export default Test;