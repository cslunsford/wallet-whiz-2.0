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

  const user = data.user;
  return (
    <div>
      <div className="container" id='pageBox'>
        <div key={user._id} className="container pageInner">
          <div className="container balanceAlign">
          <h2 className="headerText dashboardHeader">Hello {user.username || user.email}!</h2>
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
        </div>
        <div className='container' id='spendingOuter'>
        <div className='container' id='spendingContainer'>
        <h2 className="headerText" id="spending">
                MONTHLY SPENDING
              </h2>
                <SpendingChart />
        </div>
        </div>
      </div>
      </div>
  );
};

export default Dashboard;
