import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { Card, Typography } from "@mui/material";

const contributionData = [
  { month: "Jan", companyContribution: 60000, factoryContribution: 30000 },
  { month: "Feb", companyContribution: 70000, factoryContribution: 35000 },
  { month: "Mar", companyContribution: 80000, factoryContribution: 40000 },
  { month: "Apr", companyContribution: 75000, factoryContribution: 45000 },
  { month: "May", companyContribution: 65000, factoryContribution: 35000 },
  { month: "Jun", companyContribution: 70000, factoryContribution: 40000 },
  { month: "Jul", companyContribution: 85000, factoryContribution: 45000 },
  { month: "Aug", companyContribution: 80000, factoryContribution: 50000 },
  { month: "Sep", companyContribution: 75000, factoryContribution: 35000 },
  { month: "Oct", companyContribution: 95000, factoryContribution: 55000 },
  { month: "Nov", companyContribution: 90000, factoryContribution: 60000 },
  { month: "Dec", companyContribution: 100000, factoryContribution: 70000 },
];

const ContributionChart = () => {
  return (
    <Card>
      <div style={{ height: 400, padding: "15px" }}>
        <Typography variant="h5" fontWeight={"600"}>
          Contribution to recycling
        </Typography>
        <ResponsiveBar
          data={contributionData}
          keys={["companyContribution", "factoryContribution"]}
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
            legend: "contribution",
            legendPosition: "middle",
            legendOffset: -40,
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

export default ContributionChart;
