import React, { useEffect, useState } from "react";
import "./Coininfo.css";
import { CryptoState } from "../../../../CryptoContext";
import axios from "axios";
import { HistoricalChart } from "../../../../config/api";
import { CircularProgress } from "@mui/material";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { chartDays } from "../../../../config/data";
import SelectButton from "./SelectButton";

const CoinInfo = ({ coin }) => {
  const [historicData, setHistoricData] = useState();
  const [days, setDays] = useState(1);

  const { currency } = CryptoState();

  const fetchHistoricData = async () => {
    const { data } = await axios.get(HistoricalChart(coin.id, days, currency));
    setHistoricData(data.prices);
    // console.log(data.prices)
  };
  // console.log(coin);

  // console.log("Data", historicData);

  useEffect(() => {
    fetchHistoricData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency, days]);

  return (
    <div className="coininfo">
      <div className="chartcontainer">
        {!historicData ? (
          <CircularProgress
            style={{ color: "#DDC85B" }}
            size={100}
            thickness={2}
          />
        ) : (
          <div className="chart">
            <Line
              data={{
                labels: historicData.map((coin) => {
                  // console.log(coin);
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return days === 1 ? time : date.toLocaleDateString();
                }),
                

                datasets: [
                  {
                    data: historicData.map((coin) => coin[1]),
                    label: `Price ( Past ${days} Days ) in ${currency}`,
                    borderColor: "#EEBC1D",
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            />
            <div
              style={{
                display: "flex",
                marginTop: "1.25rem",
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              {chartDays.map((day) => (
                <SelectButton
                  id="selectbutton"
                  key={day.value}
                  onClick={() => {
                    setDays(day.value)
                    
                  }}
                  selected={day.value === days}
                  className="selectedbutton"
                >
                  {day.label}
                </SelectButton>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoinInfo;
