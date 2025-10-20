import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

// eslint-disable-next-line react-refresh/only-export-components
export const dataset = [
    { date: new Date(2025, 9, 1), value: 70 },
    { date: new Date(2025, 9, 2), value: 70.3 },
    { date: new Date(2025, 9, 3), value: 70.1 },
    { date: new Date(2025, 9, 4), value: 70.5 },
    { date: new Date(2025, 9, 5), value: 71 },
    { date: new Date(2025, 9, 6), value: 71.2 },
    { date: new Date(2025, 9, 7), value: 70.9 },
    { date: new Date(2025, 9, 8), value: 71.4 },
    { date: new Date(2025, 9, 9), value: 72 },
    { date: new Date(2025, 9, 10), value: 71.8 },
    { date: new Date(2025, 9, 11), value: 72.4 },]

const data = dataset.slice(-5);

export default function WeightDash() {
    return (
        <LineChart
            style={{ width: '40%' }}
            dataset={data}
            xAxis={[
                {
                    id: 'Years',
                    dataKey: 'date',
                    scaleType: 'time',
                    tickNumber: data.length,
                    valueFormatter: (date) => `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}`,
                },
            ]}
            series={[
                {
                    id: 'weight',
                    label: 'weight',
                    dataKey: 'value',
                    stack: 'total',
                    area: true,
                    showMark: false,
                    baseline: 'min',
                },
            ]}
            height={300}
        />
    );
}