import React from 'react';
import { Chart, registerables } from 'chart.js/auto';
import { useQuery } from '@apollo/client';
import { TRANSACTIONS } from '../utils/queries';
import { Doughnut } from 'react-chartjs-2';

Chart.register(...registerables);

const SpendingChart = () => {
    const { loading, error, data } = useQuery(TRANSACTIONS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>

    const transactionData = data?.transactions || [];

    const categories = transactionData.map((transaction) => transaction.category);
    const amounts = transactionData.map((transaction) => transaction.amount);

    const chartData = {
        labels: categories,
        datasets: [
            {
                data: amounts,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                ],
            },
        ],
    };

    return (
        <div className="container spendingChart">
            <Doughnut data={chartData} 
            />
        </div>
    );
};

export default SpendingChart;