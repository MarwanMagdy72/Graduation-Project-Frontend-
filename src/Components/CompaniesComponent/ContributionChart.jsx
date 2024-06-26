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
    <Card sx={{borderRadius:"20px"}}>
      <div style={{ height: 400, padding: "15px" }}>
        <Typography variant="h5" fontWeight={"600"}>
          Contribution to recycling
        </Typography>
        <ResponsiveBar
        data={contributionData}
        keys={["companyContribution", "factoryContribution"]}
        indexBy="month"
        
        margin={{ top: 50, right: 130, bottom: 80, left: 60 }}
        padding={0.6}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    '1.4'
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 8,
            tickRotation: 1,
            legend: ' ',
            legendPosition: 'middle',
            legendOffset: 33,
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: -40,
            truncateTickAt: 0
        }}
        enableLabel={false}
        labelSkipWidth={7}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    '1.6'
                ]
            ]
        }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 131,
                translateY: 52,
                itemWidth: 106,
                itemHeight: 24,
                itemsSpacing: 4,
                symbolSize: 10,
                itemDirection: 'left-to-right'
            }
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}
    />
      </div>
    </Card>
  );
};

export default ContributionChart;
