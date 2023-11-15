import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../App.css'; 
import { useQuery } from '@apollo/client';
import { USER } from '../utils/queries';
import PlaidAccounts from '../components/PlaidAccounts';
import PlaidTransactions from '../components/PlaidTransactions';
import SpendingChart from '../components/SpendingChart';

function Dashboard() {
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
                <SpendingChart />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Dashboard;
