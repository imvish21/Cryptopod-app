// import React, { useState,useEffect,useRef } from "react";
// import "./trade.css";
// import "@fontsource/rubik";
// import "@fontsource/poppins";
// import metamask from "../assets/metamask.png";
// import Modal from "./Modal";
// import Web3 from 'web3';
// import Tilt from "react-parallax-tilt";
// import { CryptoState } from "../../../CryptoContext";

//  // Import the deployContract function

// const Trade = () => {
//   const { currency, setCurrency, balance, setBalance, availBalance, setAvailBalance, contractAddress, setContractAddress,transaction, setTransaction } = CryptoState();
//   const [modal, setModal] = useState(false);
//   const [recipientAddress, setRecipientAddress] = useState('');
//   const [amount, setAmount] = useState(0);
//   // const [contractAddress, setContractAddress] = useState('');
  
//   const contractDeployed = useRef(false);

//   const deployContract = async () => {
//     try {
//       const web3 = new Web3('http://localhost:7545'); // Adjust the URL based on your Ganache setup
//       const accounts = await web3.eth.getAccounts();
//       web3.eth.defaultAccount = accounts[0];

//       const contractAbi = [
//         {
//           "inputs": [],
//           "stateMutability": "nonpayable",
//           "type": "constructor"
//         },
//         {
//           "anonymous": false,
//           "inputs": [
//             {
//               "indexed": true,
//               "internalType": "address",
//               "name": "from",
//               "type": "address"
//             },
//             {
//               "indexed": true,
//               "internalType": "address",
//               "name": "to",
//               "type": "address"
//             },
//             {
//               "indexed": false,
//               "internalType": "uint256",
//               "name": "amount",
//               "type": "uint256"
//             }
//           ],
//           "name": "EtherTransferred",
//           "type": "event"
//         },
//         {
//           "inputs": [],
//           "name": "owner",
//           "outputs": [
//             {
//               "internalType": "address",
//               "name": "",
//               "type": "address"
//             }
//           ],
//           "stateMutability": "view",
//           "type": "function",
//           "constant": true
//         },
//         {
//           "stateMutability": "payable",
//           "type": "receive",
//           "payable": true
//         },
//         {
//           "inputs": [],
//           "name": "getBalance",
//           "outputs": [
//             {
//               "internalType": "uint256",
//               "name": "",
//               "type": "uint256"
//             }
//           ],
//           "stateMutability": "view",
//           "type": "function",
//           "constant": true
//         },
//         {
//           "inputs": [
//             {
//               "internalType": "address payable",
//               "name": "recipient",
//               "type": "address"
//             }
//           ],
//           "name": "transfer",
//           "outputs": [],
//           "stateMutability": "payable",
//           "type": "function",
//           "payable": true
//         }
//       ]; // Replace with your actual ABI
//       const bytecode = 
//       '0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506106d7806100606000396000f3fe608060405260043610610055576000357c01000000000000000000000000000000000000000000000000000000009004806312065fe0146100615780631a6952301461008c5780638da5cb5b146100a85761005c565b3661005c57005b600080fd5b34801561006d57600080fd5b506100766100d3565b60405161008391906103ad565b60405180910390f35b6100a660048036038101906100a1919061042b565b610181565b005b3480156100b457600080fd5b506100bd610370565b6040516100ca9190610479565b60405180910390f35b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610164576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161015b90610517565b60405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff1631905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461020f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610206906105a9565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361027e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161027590610615565b60405180910390fd5b600034116102c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102b890610681565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f19350505050158015610307573d6000803e3d6000fd5b508073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fe542f7eace00597675a71f483aa6d1634c3833c9e7afd7d0089b291f5e04fdb63460405161036591906103ad565b60405180910390a350565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000819050919050565b6103a781610394565b82525050565b60006020820190506103c2600083018461039e565b92915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006103f8826103cd565b9050919050565b610408816103ed565b811461041357600080fd5b50565b600081359050610425816103ff565b92915050565b600060208284031215610441576104406103c8565b5b600061044f84828501610416565b91505092915050565b6000610463826103cd565b9050919050565b61047381610458565b82525050565b600060208201905061048e600083018461046a565b92915050565b600082825260208201905092915050565b7f4f6e6c7920746865206f776e65722063616e20636865636b207468652062616c60008201527f616e636500000000000000000000000000000000000000000000000000000000602082015250565b6000610501602483610494565b915061050c826104a5565b604082019050919050565b60006020820190508181036000830152610530816104f4565b9050919050565b7f4f6e6c7920746865206f776e65722063616e20706572666f726d20746869732060008201527f616374696f6e0000000000000000000000000000000000000000000000000000602082015250565b6000610593602683610494565b915061059e82610537565b604082019050919050565b600060208201905081810360008301526105c281610586565b9050919050565b7f496e76616c696420726563697069656e74206164647265737300000000000000600082015250565b60006105ff601983610494565b915061060a826105c9565b602082019050919050565b6000602082019050818103600083015261062e816105f2565b9050919050565b7f4e6f2065746865722073656e7400000000000000000000000000000000000000600082015250565b600061066b600d83610494565b915061067682610635565b602082019050919050565b6000602082019050818103600083015261069a8161065e565b905091905056fea26469706673582212202493dd6b0b60e2f3b7ed5359e52b8e323329a9c29adbf7668e5d51f6dc8ee9c464736f6c63430008170033'; // Replace with your actual bytecode

//       const deployedContract = await new web3.eth.Contract(contractAbi)
//         .deploy({ data: bytecode })
//         .send({ from: web3.eth.defaultAccount, gas: 2000000 });

//       setContractAddress(deployedContract.options.address);
//       console.log('Contract deployed successfully!');
//       contractDeployed.current = true;
//     } catch (error) {
//       console.error(error);
//       console.log('Error deploying contract. Please try again.');
//     }
//   };

//   //checkbalance
  

//   useEffect(() => {
//     if (!contractDeployed.current) {
//       deployContract();  // Deploy the contract only if it hasn't been deployed yet
//     }  
//   }, [contractAddress]);

//   const checkBalance = async () => {
//     try {
//       const web3 = new Web3('http://localhost:7545');
//       const accounts = await web3.eth.getAccounts();
//       const mybalance = await web3.eth.getBalance(accounts[0]);
//       const formattedBalance = (Number(mybalance) / 1e18).toFixed(2);
//       const formattedAvailBalance = ((Number(mybalance) / 1e18)*171892.49).toFixed(2);
//       setBalance(formattedBalance);
//       setAvailBalance(formattedAvailBalance);
//       // console.log(balance);
//       // console.log(typeof balance);
//       console.log(`Account[0] Ether Balance: ${formattedBalance} ETH`);
//       console.log(`Account[0] Balance: ${formattedAvailBalance} INR`);
//       const transactions = await web3.eth.getTransactionCount(contractAddress);
//     const transactionHistory = [];

//     for (let i = 0; i < transactions; i++) {
//       const transaction = await web3.eth.getTransactionFromBlock('latest', i);
//       transactionHistory.push(transaction);
//     }

//     console.log('Transaction History:', transactionHistory);
//     } catch (error) {
//       console.error(error);
//       console.log('Error checking balance. Please try again.');
//     }
//   };

//   const transferEther = async () => {
//     try {
//       const web3 = new Web3('http://localhost:7545'); // Adjust the URL based on your Ganache setup
//       const accounts = await web3.eth.getAccounts();
//       web3.eth.defaultAccount = accounts[0];

//       const contractAbi = [
//         {
//           "inputs": [],
//           "stateMutability": "nonpayable",
//           "type": "constructor"
//         },
//         {
//           "anonymous": false,
//           "inputs": [
//             {
//               "indexed": true,
//               "internalType": "address",
//               "name": "from",
//               "type": "address"
//             },
//             {
//               "indexed": true,
//               "internalType": "address",
//               "name": "to",
//               "type": "address"
//             },
//             {
//               "indexed": false,
//               "internalType": "uint256",
//               "name": "amount",
//               "type": "uint256"
//             }
//           ],
//           "name": "EtherTransferred",
//           "type": "event"
//         },
//         {
//           "inputs": [],
//           "name": "owner",
//           "outputs": [
//             {
//               "internalType": "address",
//               "name": "",
//               "type": "address"
//             }
//           ],
//           "stateMutability": "view",
//           "type": "function",
//           "constant": true
//         },
//         {
//           "stateMutability": "payable",
//           "type": "receive",
//           "payable": true
//         },
//         {
//           "inputs": [],
//           "name": "getBalance",
//           "outputs": [
//             {
//               "internalType": "uint256",
//               "name": "",
//               "type": "uint256"
//             }
//           ],
//           "stateMutability": "view",
//           "type": "function",
//           "constant": true
//         },
//         {
//           "inputs": [
//             {
//               "internalType": "address payable",
//               "name": "recipient",
//               "type": "address"
//             }
//           ],
//           "name": "transfer",
//           "outputs": [],
//           "stateMutability": "payable",
//           "type": "function",
//           "payable": true
//         }
//       ]; // Replace with your actual ABI
//       const etherTransactionContract = new web3.eth.Contract(contractAbi, contractAddress);

//       await etherTransactionContract.methods.transfer(recipientAddress).send({
//         from: web3.eth.defaultAccount,
//         value: web3.utils.toWei(amount, 'ether'), // Convert amount to wei
//       });
//       setModal(true);
//       checkBalance();
//       console.log('Ether transferred successfully!');
//       const transact = transaction+1;
//       setTransaction(transact);
//     } catch (error) {
//       console.error(error);
//       console.log('Error transferring Ether. Please check the recipient address and try again.');
//     }
//   };

//   return (
//     <div className="trade">
//       <div className="navbar">
//         <h1 className="navhead">Ethereum Exchange</h1>
//       </div>
//       <div className="transaction">
//         <div className="metamask">
//           <img src={metamask} alt="metamask" className="metaimg" />
//         </div>
//         <Tilt glareEnable={true} tiltMaxAngleX={10} 
//         tiltMaxAngleY={10} perspective={1000} 
//         glareColor={"transparent"}>
//         <div className="sendeth">
       
//           <form className="ethform" onSubmit={(e) => {
//           e.preventDefault();
//           transferEther();
//         }}>
//             <div className="receiptaddr">
//               <label htmlFor="" className="raddr">
//                 Receipent Address :
//               </label>
//               <input
//                 type="text"
//                 value={recipientAddress}
//                 onChange={(e) => setRecipientAddress(e.target.value)}
//               />
//             </div>
//             <div className="receiptamnt">
//               <label htmlFor="" className="amount">
//                 Amount (ETH) :
//               </label>
//               <input
//                 type="number"
//                 value={amount}
//                 onChange={(e) => setAmount(e.target.value)}
//               />
//             </div>
//             <button type="submit" className="ethbtn">
//               Send
//             </button>
//           </form>
//         </div>
//         </Tilt>
//         <Modal
//               modal={modal}
//               onClose={() => {
//                 setModal(false);
//               }}
//             />
//       </div>
//     </div>
//   );
// };

// export default Trade;
