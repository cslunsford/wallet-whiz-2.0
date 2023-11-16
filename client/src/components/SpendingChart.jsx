import React from "react";
import { Chart, registerables } from "chart.js/auto";
import { useQuery } from "@apollo/client";
import { TRANSACTIONS } from "../utils/queries";
import { Doughnut } from "react-chartjs-2";

Chart.register(...registerables);

const SpendingChart = () => {
    const { loading, error, data } = useQuery(TRANSACTIONS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const transactionData = data?.transactions || [];

    const categoryAmount = transactionData.reduce((acc, transaction) => {
        const category = transaction.category;
        if (transaction.amount >= 0) {
            acc[category] = (acc[category] || 0) + transaction.amount;
        }
        return acc;
    }, {});

    const categories = Object.keys(categoryAmount);
    const amount = Object.values(categoryAmount);
    const totalSum = amount.reduce((sum, value) => sum + value, 0);

    const Options = {
        plugins: {
            legend: {
                labels: {
                    color: "white",
                },
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        const label = context.label;
                        const value = context.parsed;
                        const percentage = ((value / totalSum) * 100).toFixed(2) + '%';
                        return `${label}: ${percentage}`;
                    }
                }
            }
        },
    };

    const chartData = {
        labels: categories,
        datasets: [
            {
                data: amount,
                fontColor: "#fff",
                backgroundColor: [
                    '#b36bb6',
                    '#5568be',
                    'rgb(218, 137, 221)',
                    '#e0e087',
                ],
            },
        ],
    };

    return (
        <div className="container spendingChart">
            <Doughnut data={chartData} options={Options} />
        </div>
    );
};

export default SpendingChart;
