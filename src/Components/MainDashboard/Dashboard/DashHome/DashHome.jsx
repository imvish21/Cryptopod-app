import "./dashhome.css";
import AliceCarousel from "react-alice-carousel";
import {
  MenuItem,
  Container,
  Toolbar,
  Typography,
  Select,
} from "@mui/material";
import "@fontsource/rubik";
import "@fontsource/poppins";
import { CryptoState } from "../../../../CryptoContext";
import axios from "axios";
import { TrendingCoins } from "../../../../config/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Coinstable from "./Coinstable";

export const numberWithCommas = (x) =>{
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const DashHome = () => {
  const { currency, setCurrency,symbol } = CryptoState();
  console.log(currency);
  const handlecurrencychange = (e) => {
    setCurrency(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  /* fetching the trending coins for the carousel*/
  const [trending, setTrending] = useState([]);
  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));
    setTrending(data);
  };
  // console.log(trending);
  //to call the fetchTrendingCoins func when our carousel is first time rendered,useEffect hook is used here.
  useEffect(() => {
    fetchTrendingCoins();
  }, [currency]);

  /*responsive object for carousel*/
  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };
  const citems = trending.map((coin) => {
    let profit = coin.price_change_percentage_24h >=0;
    return (
      <Link className="carouselItem" to={`/coins/${coin.id}`}>
        <div className="tdetails">
          <img className="timg" src={coin?.image} alt={coin.name} />
          <div className="tname">
            <span className="tn">{coin.name}</span>
            <span className="tsym">{coin?.symbol}</span>
          </div>
          <span className="rank">Rank : {coin.market_cap_rank
}</span>
        </div>
        <div className="amtgrph">
          <div className="amount">
            <span className="currprice">{symbol}{numberWithCommas(coin?.current_price.toFixed(2))}</span>
            <span className="currchange" style={{color: profit>0 ? "#1dd6b4" : "red"}}>{profit && "+"}{coin?.price_change_percentage_24h?.toFixed(2)}%</span>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <div className="dashhome">
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
      <div className="cryptocarousel">
        <Container>
          <AliceCarousel
            mouseTracking
            infinite
            autoPlayInterval={1000}
            animationDuration={1500}
            disableDotsControls
            disableButtonsControls
            responsive={responsive}
            autoPlay
            items={citems}
          />
        </Container>
      </div>
      <Coinstable />
        
    </div>
  );
};

export default DashHome;
