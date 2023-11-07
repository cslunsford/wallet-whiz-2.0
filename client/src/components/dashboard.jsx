import React from "react";

const SpendingChart = ({ data }) => {

  return (
    <div className="spendingChart">{}</div>
  );
};

const Dashboard = ({
  User,
  loggedIn,
  account1,
  account1Balance,
  account2,
  account2Balance,
  transactions,
  spendingData,
}) => {
  return (
    <div>
      <div className="container-fluid pageBox">
        <div className="container-fluid headerAlign">
          <h2 className="headerText dashboardHeader">Hello {User}!</h2>
        </div>
        <div className="container-fluid pageInner">
          <div className="container-fluid balanceAlign">
            <div className="card displayCards" id="balanceCard">
              <h3 className="card-title headerText" id="accountsHeader">
                ACCOUNTS
              </h3>
              <div
                className="container-fluid balanceContainer"
                id="balanceContainer"
              >
                {loggedIn && (
                  <div className="balanceBoxes">
                    <h4
                      className="headerText balanceHeaders"
                      id="savingsHeader"
                    >
                      {account1}
                    </h4>
                    <p className="card-text" id="savings">
                      {account1Balance}
                    </p>
                  </div>
                )}
                {loggedIn && (
                  <div className="balanceBoxes">
                    <h4
                      className="headerText balanceHeaders"
                      id="checkingHeader"
                    >
                      {account2}
                    </h4>
                    <p className="card-text" id="checking">
                      {account2Balance}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="container transactionAlign">
            <div className="card displayCards" id="transactionCard">
              <h2 className="headerText" id="history">
                TRANSACTION HISTORY
              </h2>
              <div className="transactionContainer" id="transactionContainer">
                {transactions.map((transaction, index) => (
                  <div key={index} className="transactionDisplays">
                    <div className="transactionDescriptionAlign">
                      <h3 className="headerText transactionCompany">
                        {transaction.company}
                      </h3>
                      <h3 className="headerText transactionDate">
                        {transaction.date}
                      </h3>
                    </div>
                    <div className="transactionAmountAlign">
                      <h3 className="headerText transactionAmount">
                        {transaction.amount}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="container spendingAlign">
            <div className="card displayCards" id="spendingCard">
              <h2 className="headerText" id="spending">
                MONTHLY SPENDING
              </h2>
              <SpendingChart data={spendingData} />
            </div>
          </div>
        </div>
        <div className="linkButtonAlign">
          <button className="btn btn-primary btn-lg" id="link-button">
            Link Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
