import React, { useEffect, useState } from "react";
import "./Coinstable.css";
import axios from "axios";
import { CoinList } from "../../../../config/api";
import { CryptoState } from "../../../../CryptoContext";
import "@fontsource/rubik";
import "@fontsource/poppins";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  TextField,
  TableContainer,
  LinearProgress,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { Pagination } from "@mui/material";
import { numberWithCommas } from "./DashHome";
import DashHome from "./DashHome";

const Coinstable = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const { currency, symbol } = CryptoState();
  const navigate = useNavigate();
  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));
    setCoins(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoins();
  }, [currency]);
  // console.log(coins);

  /*search coins*/
  const onCoinSearch = (e) => {
    setSearch(e.target.value);
  };
  const onCoinSubmit = (e) => {
    e.preventDefault();
  };

  const handleSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };

  return (
    <div className="coinstable">
      <Container style={{ textAlign: "center" }}>
        <Typography
          variant="h4"
          style={{ margin: 18, fontFamily: "Montserrat", color: "salmon" }}
        >
          Cryptocurrency Prices By Market Cap
        </Typography>
        <TextField
          label="Search For Crypto Currency"
          variant="outlined"
          className="coinsearch"
          onChange={onCoinSearch}
          onSubmit={onCoinSubmit}
        />
        <TableContainer className="tcontainer">
          {loading ? (
            <LinearProgress style={{ backgroundColor: "gold" }} />
          ) : (
            <Table className="ctable">
              <TableHead className="thead">
                <TableRow className="theadrow">
                  {["Coins", "Price", "24h Change", "Market Cap"].map(
                    (head) => (
                      <TableCell
                        style={{
                          color: "black",
                          fontWeight: "700",
                          fontFamily: "Rubik",
                          fontSize: "1.5rem",
                        }}
                        key={head}
                        align={head === "Coins" ? "" : "right"}
                      >
                        {head}
                      </TableCell>
                    )
                  )}
                </TableRow>
              </TableHead>
              <TableBody className="tbody">
                {handleSearch()
                  .slice((page - 1) * 10, (page - 1) * 10 + 10)
                  .map((row) => {
                    const profit = row.price_change_percentage_24h > 0;
                    return (
                      <TableRow
                        onClick={() => navigate(`/coins/${row.id}`)}
                        className="rows"
                        key={row.name}
                      >
                        <TableCell
                          component="th"
                          scope="row"
                          style={{
                            display: "flex",
                            gap: 15,
                            borderBottom: "0.5px solid #000000",
                          }}
                        >
                          <img
                            src={row?.image}
                            alt={row.name}
                            height="45"
                            width="45"
                            style={{
                              marginBottom: "0.3rem",
                              borderRadius: "50%",
                            }}
                          />
                          <div
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <span
                              style={{
                                color: "#000",
                                fontSize: "1.1rem",
                                fontWeight: "600",
                              }}
                            >
                              {row.name}
                            </span>
                            <span
                              style={{
                                textTransform: "uppercase",
                                color: "black",
                              }}
                            >
                              {row.symbol}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell
                          align="right"
                          className="tcell2"
                          style={{
                            borderBottom: "0.5px solid #000000",
                            color: "#000",
                            fontFamily: "Rubik",
                            fontSize: "1.1rem",
                            fontWeight: 500,
                          }}
                        >
                          {symbol}{" "}
                          {numberWithCommas(row.current_price.toFixed(2))}
                        </TableCell>
                        <TableCell
                          align="right"
                          style={{
                            color: profit > 0 ? "green" : "red",
                            fontWeight: 500,
                            fontSize: "0.9rem",
                            fontFamily: "Poppins",
                            borderBottom: "0.5px solid #000000",
                          }}
                          className="tcell3"
                        >
                          {profit && "+"}
                          {row.price_change_percentage_24h.toFixed(2)}%
                        </TableCell>
                        <TableCell align="right" className="tcell4" style={{
                          fontSize: "1rem",
                          fontWeight: 500,
                          fontFamily: "Poppins",
                          borderBottom: "0.5px solid #000000"
                        }}>
                          {symbol}{" "}
                          {numberWithCommas(
                            row.market_cap.toString().slice(0, -6)
                          )}
                          M
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          )}
        </TableContainer>
        <Pagination
          className="pages"
          count={(handleSearch().length / 10).toFixed(0)}
          onChange={(_, value) => {
            setPage(value);
            let dashhome = document.getElementsByClassName("dashhome")[0];
            dashhome.scroll(0, 320);
          }}
        />
      </Container>
    </div>
  );
};

export default Coinstable;
