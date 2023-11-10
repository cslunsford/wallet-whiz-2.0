import React from "react";
import Dashboard from "./Dashboard";
import Homepage from "./Homepage";
import user from "./user";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import ContactForm from './ContactForm';



const App = () => {
  // Placeholder data for the Dashboard component
  const user = "John Doe";
  const loggedIn = true;
  const account1 = "Savings Account";
  const account1Balance = "$10,000.00";
  const account2 = "Checking Account";
  const account2Balance = "$5,000.00";
  const transactions = [
    { company: " A", date: "2023-11-01", amount: "$100.00" },
    { company: "ComCompanypany B", date: "2023-11-05", amount: "$50.00" },
    { company: "Company C", date: "2023-11-10", amount: "$75.00" },
  ];

  //Placeholder data for the homepage
  const tagline = "Welcome to the Future of Finance";
  const taglineSubtext = "Take control of your finances now";
  const loginText = "Login";
  const registerText = "Register";

 //Placeholder data for register page
  const registerHeader = "Register";
  const registerEmail = "Email Address";
  const registerPassword = "Password";
  const repeatPassword = "Confirm Password";
  const registerButton = "Register";

  //Placeholder data for user page
  const userHeader = "User";
  const userAccount = "Account";
  const userBalance = "Balance";
  const userTransactions = "Transactions";
  const userSpending = "Spending";

  // Placeholder data for the spending pie chart
  const spendingData = [
    { category: "Food", amount: 300 },
    { category: "Rent", amount: 800 },
    { category: "Entertainment", amount: 150 },
  ];

  return (
    <div>
      <Dashboard
        User={user}
        loggedIn={loggedIn}
        account1={account1}
        account1Balance={account1Balance}
        account2={account2}
        account2Balance={account2Balance}
        transactions={transactions}
        spendingData={spendingData}
      />
    </div>
  );
};

export default App;
