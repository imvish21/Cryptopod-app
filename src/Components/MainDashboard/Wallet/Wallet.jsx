import React, { useState } from "react";
import "@fontsource/rubik";
import "@fontsource/poppins";
import "./wallet.css";
import { numberWithCommas } from "../Dashboard/DashHome/DashHome";
import { CryptoState } from "../../../CryptoContext";

const Wallet = () => {
  // const [currentEther,setCurrentEther] = useState(100);
  // const [currentbalance,setCurrentBalance] = useState(100*173671.26);
  const {
    currency,
    setCurrency,
    balance,
    setBalance,
    availBalance,
    setAvailBalance,
    contractAddress,
    setContractAddress,
    transaction,
    setTransaction,
    transactionHistory,
  } = CryptoState();

  const formatTimestamp = (timestamp) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZone: "Asia/Kolkata",
    };

    const date = new Date(timestamp).toLocaleString("en-IN", options);

    if (date) {
      return date;
    } else {
      return "Invalid Date";
    }
  };

  return (
    <div className="wallet">
      <div className="mybalance">
        <h1 className="balhead">My Balance</h1>
      </div>
      <div className="balance">
        <div className="amountbal">
          <div className="amttop">
            <div className="amticon">
              <i className="fa-regular fa-credit-card fa-sm"></i>
            </div>
            <div className="amt">
              <h2 className="amthead">Available Balance</h2>
              <h1 className="avlbal">
                ₹{numberWithCommas(availBalance)}
                <span>INR</span>
              </h1>
            </div>
            <div className="trending">
              <i className="fa-solid fa-arrow-trend-up"></i>
            </div>
          </div>
          <div className="amtbottom">
            <h1 className="view">Transactions Done : {transaction}</h1>
          </div>
        </div>

        <div className="ethbal">
          <div className="amttop">
            <div className="ethicon">
              <i className="fa-brands fa-ethereum fa-sm"></i>
            </div>
            <div className="amt">
              <h2 className="amthead">Ethereum Balance</h2>
              <h1 className="ether">
                {numberWithCommas(balance)}
                <span>ETH</span>
              </h1>
            </div>
            <div className="block">
              <i className="fa-solid fa-cubes"></i>
            </div>
          </div>
          <div className="amtbottom">
            <h1 className="view">Ethereum Blockchain</h1>
          </div>
        </div>
      </div>

      <div className="transaction-history">
        <h2 className="transhishead">Recent Transactions</h2>
        <ul className="transactullist">
          {transactionHistory.slice(0, 10).map((transaction, index) => (
            <li key={index} className="transactlist">
              <div className="transactaddr">
                <div className="senderaddr">
                  <h2 className="sender">SENDER ADDRESS</h2>
                  <p className="raddr">{transaction.from}</p>
                </div>
                <div className="recieveaddr">
                  <h2 className="recieve">RECEIVER ADDRESS</h2>
                  <p className="saddr">{transaction.to}</p>
                </div>
              </div>
              <div className="transactvalue">
                <h2 className="value">Value : {numberWithCommas(transaction.amount/1000000000000000000)} <span>ETH</span></h2>
              </div>
              <div className="transactdate">
                <span className="transaction-date">{formatTimestamp(transaction.timestamp)}</span>
              </div>
              {/* <div>
                <span className="transaction-type">{transaction.to ? 'Sent : ' : 'Received : '}</span>
                <span className="transaction-amount">
                  {numberWithCommas(transaction.amount/1000000000000000000)} ETH
                </span>
              </div>
              <div className="transaction-details">
                <span className="transaction-date">{formatTimestamp()}</span>
                <span className="transaction-address">
                  {transaction.to ? `To: ${transaction.to}`: `From: ${transaction.from}`  }
                </span>
              </div> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Wallet;
