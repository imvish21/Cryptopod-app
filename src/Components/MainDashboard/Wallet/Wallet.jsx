import React, { useState } from 'react'
import "@fontsource/rubik";
import "@fontsource/poppins";
import './wallet.css'
import { numberWithCommas } from "../Dashboard/DashHome/DashHome";
import { CryptoState } from "../../../CryptoContext";

const Wallet = () => {
  // const [currentEther,setCurrentEther] = useState(100);
  // const [currentbalance,setCurrentBalance] = useState(100*173671.26);
  const { currency, setCurrency, balance, setBalance, availBalance, setAvailBalance, contractAddress, setContractAddress,transaction, setTransaction } = CryptoState();
  return (
    <div className='wallet'>
      <div className='mybalance'>
        <h1 className='balhead'>My Balance</h1>
      </div>
      <div className="balance">
        <div className='amountbal'>
          <div className='amttop'>
            <div className='amticon'>
              <i className="fa-regular fa-credit-card fa-sm"></i>
            </div>
            <div className='amt'>
              <h2 className='amthead'>Available Balance</h2>
              <h1 className='avlbal'>₹{numberWithCommas(availBalance)}<span>INR</span></h1>
            </div>
            <div className='trending'>
              <i className="fa-solid fa-arrow-trend-up"></i>
            </div>
          </div>
          <div className="amtbottom">
            <h1 className='view'>Transactions Done : {transaction}</h1>
          </div>
        </div>
        
        <div className="ethbal">
        <div className='amttop'>
            <div className='ethicon'>
              <i className="fa-brands fa-ethereum fa-sm"></i>
            </div>
            <div className='amt'>
              <h2 className='amthead'>Ethereum Balance</h2>
              <h1 className='ether'>{numberWithCommas(balance)}<span>ETH</span></h1>
            </div>
            <div className='block'>
              <i className="fa-solid fa-cubes"></i>
            </div>
          </div>
          <div className="amtbottom">
            <h1 className='view'>Ethereum Blockchain</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wallet
