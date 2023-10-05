'use client';

import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

interface ChartComponentProps {
  data: {
    labels: string[];
    values: string[];
  };
}

const ChartComponent: React.FC<ChartComponentProps> = ({ data }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d') as CanvasRenderingContext2D; // Type assertion

      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: data.labels,
          datasets: [
            {
              label: 'Data',
              data: data.values,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        },
      });
    }
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default ChartComponent;
