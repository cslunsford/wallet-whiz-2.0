import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../App.css'; 

import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar'; 
import Divider from '@mui/material/Divider';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AccessTimeIcon from '@mui/icons-material/AccessTime';


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

  return (
    <div>
      <div className="container pageBox">
        <div className="container pageInner">
          <div className="container balanceAlign">
          <h2 className="headerText dashboardHeader">Hello User!</h2>
            <div className="cards" id="balanceCard">
              <h3 className="headerText" id="accountsHeader">
                ACCOUNTS
              </h3>
              <div className="container balanceContainer" id="balanceContainer">
                <div className="balanceBoxes">
                  <h4 className="headerText balanceHeaders" id="savingsHeader">
                    Savings Account
                  </h4>
                  <p className="headerText" id="savings">$5,000</p>
                </div>
                <div className="balanceBoxes">
                  <h4 className="headerText balanceHeaders" id="checkingHeader">
                    Checking Account
                  </h4>
                  <p className="headerText" id="checking">$2,500</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container transactionAlign">
            <div className="cards" id="transactionCard">
              <h2 className="headerText" id="history">
                TRANSACTION HISTORY
              </h2>
              <div className="transactionContainer" id="transactionContainer">
                <List>
                {transactions.map((transaction, index) => (
                  <List>
                  <ListItem>
                  <ListItemAvatar>
                      <Avatar>
                      </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Username" secondary="Username Placeholder" />
              </ListItem>
              <Divider variant="inset" component="li" />
              </List>
                ))}
                </List>
              </div>
            </div>
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
        <div className="linkButtonAlign">
          <Button variant='contained' disableElevation>Link Account</Button>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
