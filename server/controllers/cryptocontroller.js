const asyncHandler = require("express-async-handler");

const express = require("express");
const path = require("path");
// @desc Get all contacts
// @route GET /api/contacts
// @access private

const getDashboard = asyncHandler(async (req, res) => {
    const filePath = path.join(__dirname,"..","..","src","Components","MainDashboard","Dashboard","DashHome","DashHome.jsx");
  // Send the file as a response
  res.sendFile(filePath, (err) => {
    if (err) {
      // Handle errors if the file cannot be sent
      console.error('Error sending file:', err);
      res.status(err.status).end();
    } else {
      console.log('File sent successfully');
    }
  });
});
const getTrade=asyncHandler(async(req,res)=>{
    const filePath=path.join(__dirname,"..","..","src","Components","MainDashboard","Trade","Trade.jsx");
    res.sendFile(filePath, (err) => {
        if (err) {
          // Handle errors if the file cannot be sent
          console.error('Error sending file:', err);
          res.status(err.status).end();
        } else {
          console.log('File sent successfully');
        }
      });
})
const getSettings=asyncHandler(async(req,res)=>{
  const filePath=path.join(__dirname,"..","..","src","Components","MainDashboard","Settings","Settings.jsx");
  res.sendFile(filePath, (err) => {
      if (err) {
        // Handle errors if the file cannot be sent
        console.error('Error sending file:', err);
        res.status(err.status).end();
      } else {
        console.log('File sent successfully');
      }
    });
})
const getWallet=asyncHandler(async(req,res)=>{
  const filePath=path.join(__dirname,"..","..","src","Components","MainDashboard","Wallet","Wallet.jsx");
  res.sendFile(filePath, (err) => {
      if (err) {
        // Handle errors if the file cannot be sent
        console.error('Error sending file:', err);
        res.status(err.status).end();
      } else {
        console.log('File sent successfully');
      }
    });
})
module.exports = {getDashboard,getTrade,getWallet,getSettings};