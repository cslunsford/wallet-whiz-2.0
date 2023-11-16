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

    const categories = transactionData.map((transaction) =>
        transaction.category.toLowerCase()
    );
    const amounts = transactionData.map((transaction) => transaction.amount);
    const amountFiltered = amounts.filter((n) => n > 0);
    const legend = {
        display: false,
    };

    const Options = {
        options: {
            plugins: {
                legend: {
                    labels: {
                        color: "red",
                    },
                },
            },
        },
    };

    const chartData = {
        labels: categories,
        datasets: [
            {
                data: amountFiltered,
                fontColor: "#fff",
                backgroundColor: [
                    "rgba(255, 99, 132, 0.6)",
                    "rgba(54, 162, 235, 0.6)",
                    "rgba(255, 206, 86, 0.6)",
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
