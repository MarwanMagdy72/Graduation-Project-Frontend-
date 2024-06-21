import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { Card } from "@mui/material";
import { Typography } from "@mui/material";

const profitData = [
  { month: "Jan", companyProfit: 10000, factoryProfit: 5000 },
  { month: "Feb", companyProfit: 15000, factoryProfit: 7000 },
  { month: "Mar", companyProfit: 12000, factoryProfit: 8000 },
  { month: "Apr", companyProfit: 18000, factoryProfit: 9000 },
  { month: "May", companyProfit: 14000, factoryProfit: 6000 },
  { month: "Jun", companyProfit: 16000, factoryProfit: 11000 },
  { month: "Jul", companyProfit: 17000, factoryProfit: 10000 },
  { month: "Aug", companyProfit: 15000, factoryProfit: 12000 },
  { month: "Sep", companyProfit: 13000, factoryProfit: 9000 },
  { month: "Oct", companyProfit: 20000, factoryProfit: 13000 },
  { month: "Nov", companyProfit: 17000, factoryProfit: 14000 },
  { month: "Dec", companyProfit: 22000, factoryProfit: 15000 },
];

const ProfitChart = () => {
  return (
    <Card>
      <div style={{ height: 400 ,padding: "15px" }}>
        <Typography variant="h5" fontWeight={"600"}>
          Profit
        </Typography>
        <ResponsiveBar
          data={profitData}
          keys={["companyProfit", "factoryProfit"]}
          indexBy="month"
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.3}
          valueScale={{ type: "linear" }}
          indexScale={{ type: "band", round: true }}
          colors={{ scheme: "nivo" }}
          borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "month",
            legendPosition: "middle",
            legendOffset: 32,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "profit",
            legendPosition: "middle",
            legendOffset: -50,
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
          legends={[
            {
              dataFrom: "keys",
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: "left-to-right",
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [
                {
                  on: "hover",
                  style: {
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
          animate={true}
          motionStiffness={90}
          motionDamping={15}
        />
      </div>
    </Card>
  );
};

export default ProfitChart;
