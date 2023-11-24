import React, { createContext, useContext, useEffect, useState } from 'react';

const Crypto = createContext();

const CryptoContext = ({ children }) => {
  // Check if values are stored in localStorage
  const storedCurrency = localStorage.getItem('currency');
  const storedBalance = localStorage.getItem('balance');
  const storedAvailBalance = localStorage.getItem('availBalance');
  const storedContractAddress = localStorage.getItem('contractAddress');
  const storedTransaction= localStorage.getItem('transaction');

  // Initialize state with stored or default values
  const [currency, setCurrency] = useState(storedCurrency || 'INR');
  const [symbol, setSymbol] = useState(storedCurrency === 'USD' ? '$' : '₹');
  const [balance, setBalance] = useState(storedBalance ? parseFloat(storedBalance) : 0);
  const [availBalance, setAvailBalance] = useState(storedAvailBalance ? parseFloat(storedAvailBalance) : 0);
  const [contractAddress, setContractAddress] = useState(storedContractAddress ? storedContractAddress : '');
  const [transaction, setTransaction] = useState(storedTransaction ? parseFloat(storedTransaction) : 0);

  useEffect(() => {
    // Update localStorage when currency, balance, or availBalance changes
    localStorage.setItem('currency', currency);
    localStorage.setItem('balance', balance.toString());
    localStorage.setItem('availBalance', availBalance.toString());
    localStorage.setItem('contractAddress', contractAddress.toString());
    localStorage.setItem('transaction', transaction.toString());

    // Update symbol based on currency
    if (currency === 'INR') {
      setSymbol('₹');
    } else if (currency === 'USD') {
      setSymbol('$');
    }
  }, [currency, balance, availBalance,contractAddress,transaction]);

  // Context value
  const contextValue = {
    currency,
    symbol,
    setCurrency,
    balance,
    setBalance,
    availBalance,
    setAvailBalance,
    contractAddress, 
    setContractAddress,
    transaction, 
    setTransaction,
  };

  // Return the provider with the value
  return <Crypto.Provider value={contextValue}>{children}</Crypto.Provider>;
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
};
