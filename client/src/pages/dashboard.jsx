import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../App.css'; 
import { useQuery } from '@apollo/client';
import { USER } from '../utils/queries';
import Button from '@mui/material/Button';
import PlaidAccounts from '../components/PlaidAccounts';
import PlaidTransactions from '../components/PlaidTransactions';


//import Chart from 'react-chartjs-2'; 

function Dashboard() {
  // Placeholder data
  const transactions = [
    { company: 'Company A', date: '2023-11-01', amount: '$100.00' },
    { company: 'Company B', date: '2023-11-05', amount: '$50.00' },
    { company: 'Company C', date: '2023-11-10', amount: '$75.00' },
  ];

  // Placeholder data for the spending pie chart
  const spendingData = {
    labels: ['Food', 'Rent', 'Entertainment'],
    datasets: [
      {
        data: [300, 800, 150],
        backgroundColor: ['red', 'blue', 'green'],
      },
    ],
  };

  const { loading, error, data } = useQuery(USER);

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div>
      <div className="container pageBox">
        <div className="container pageInner">
          <div className="container balanceAlign">
          <h2 className="headerText dashboardHeader">Hello User!</h2>
            <div className="container">
              <h3 className="headerText" id="accountsHeader">
                ACCOUNTS
              </h3>             
              <PlaidAccounts />
            </div>
          </div>
          <div className="container">
              <h2 className="headerText">
                TRANSACTION HISTORY
              </h2>
                <PlaidTransactions />
          </div>
          <div className="container spendingAlign">
            <div className="cards" id="spendingCard">
              <h2 className="headerText" id="spending">
                MONTHLY SPENDING
              </h2>
              <div className="spendingChart">
                {/* /* <Chart
                  type="pie"
                  data={spendingData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                  }}
                /> */ }
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Dashboard;
