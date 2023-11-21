import React from 'react'
import './Coinpage.css'
import {
  MenuItem,
  Container,
  Toolbar,
  Typography,
  Select,
  LinearProgress,
} from "@mui/material";
import "@fontsource/rubik";
import "@fontsource/poppins";
import { CryptoState } from "../../../../CryptoContext";
import axios from "axios";
import { SingleCoin } from "../../../../config/api";
import { useEffect, useState } from "react";
import { Link,useParams, } from "react-router-dom";
import CoinInfo from './CoinInfo';
import ReactHtmlParser from "react-html-parser";

export const numberWithCommas = (x) =>{
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const Coinpage = () => {
  const { currency, setCurrency,symbol } = CryptoState();
  const handlecurrencychange = (e) => {
    setCurrency(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const { id } = useParams();
  const [coin,setCoin] = useState();
  const fetchCoin = async() => {
      const {data} = await axios.get(SingleCoin(id));
      setCoin(data);
  }
  console.log(coin);
  useEffect(()=>{
    fetchCoin();
  },[])

  if(!coin) return <LinearProgress style={{backgroundColor: "gold"}} />;

  return (
    <div className="coinpage">
      <header className="dashhead">
        <Container>
          <Toolbar className="dashmenu">
            <Typography className="heading">Market Trends</Typography>
            <Select
              className="currtype"
              sx={{
                ".MuiOutlinedInput-notchedOutline": { borderStyle: "none" },
              }}
              value={currency}
              onChange={handlecurrencychange}
              onSubmit={handleSubmit}
            >
              <MenuItem value={"INR"} className="item inritem">
                INR
              </MenuItem>
              <MenuItem value={"USD"} className="item usditem">
                USD
              </MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </header>
      <div className="coincontainer">
        <div className="coinsidebar">
          <img src={coin?.image.large} alt={coin?.name}
           style={{marginBottom: "1.25rem"}} className='coinimg'/>
           <Typography variant='h3' className='coinheading'>{coin?.name}</Typography>
           <Typography variant='subtitle1' className='coindes'>{ReactHtmlParser(coin?.description.en.split(". ")[0])}</Typography>
           <div className='marketdata' style={{backgroundColor: "#000", border: "1px solid white", borderRadius: 20,padding: "1rem"}}>
              <span style={{display:"flex"}}>
                <Typography variant='h5' className='coinrank'>Rank :</Typography>
                &nbsp;
                <Typography style={{fontFamily: "Montserrat", color:"#1DD6B4", fontStyle:"italic"}} variant='h5'>{coin?.market_cap_rank}</Typography>
              </span>
              <span style={{display:"flex"}}>
                <Typography variant='h5' className='coinprice'>Current Price:</Typography>
                &nbsp; &nbsp;
                <Typography style={{fontFamily: "Montserrat", color:"#FFFDD0"}} variant='h5'>{symbol}{" "}{numberWithCommas(coin?.market_data.current_price[currency.toLowerCase()])}</Typography>
              </span>
              <span style={{display:"flex"}}>
                <Typography variant='h5' className='coinmarketcap'>Market Cap:{" "}</Typography>
                &nbsp; &nbsp;
                <Typography style={{fontFamily: "Montserrat", color:"#FFFDD0"}} variant='h5'>{symbol}{" "}{numberWithCommas(coin?.market_data.market_cap[currency.toLowerCase()].toString().slice(0, -6)
                )}{" "}M</Typography>
              </span>
           </div>
        </div>

        {/* chart */}
        <CoinInfo coin={coin}/>

      </div>
    </div>
  )
}

export default Coinpage
